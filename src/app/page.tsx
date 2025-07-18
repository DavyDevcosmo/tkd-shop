
import { AboutUsSection } from "./componets/About-us"
import ProductList from "./componets/Product-list"
import { Footer } from "./componets/Footer"
import NavBar from "./componets/Nav-bar"
import db from "../../prisma/db"
import { FilterContextProvider } from "./context/filter-context"
import { BannerMain } from "./componets/Banner-main"
import SizePriceFilters from "./componets/filterForProducts/Filter-protetor-de-tronco"
import ProductFilters from "./componets/filterForProducts/Filter-dobok"
import FilterDobok from "./componets/filterForProducts/Filter-dobok"
import FilterTaekwondoBelt from "./componets/filterForProducts/Filter-taekwondo-belt"


type SearchParams = {
  q?: string;
  category?: string;
  color?: string;
  sizeDobok?: string;
};

async function getProducts(searchTerm?: string, category?: string, color?: string, sizeDobok?: string) {
  const where: any = {};

  if (searchTerm) {
    where.name = { contains: searchTerm, mode: 'insensitive' };
  }

  if (category && category !== 'ALL') {
    where.category = { name: category };
  }
  if (color) {
    if (Array.isArray(color)) {
      where.color = { in: color };
    } else {
      where.color = color
    }
  }

  if (sizeDobok) {
    if (Array.isArray(sizeDobok)) {
      where.sizeDobok = { in: sizeDobok };
    } else {
      where.sizeDobok = sizeDobok;
    }
  }

  return db.product.findMany({
    where,
    include: {
      images: true,
      category: {
        select: {
          name: true
        }
      }
    },
    orderBy: { createdAt: 'desc' },
  });
}

export default async function Home({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const searchTerm = params?.q;
  const category = params?.category;
  const color = params?.color;
  const sizeDobok = params?.sizeDobok;
  const products = await getProducts(searchTerm, category, color, sizeDobok);

  return (
    <main>
      <FilterContextProvider>
        <NavBar />
        <BannerMain />
        {category === 'DOBOK' && <FilterDobok />}
        {category === 'PROTECTION' && <SizePriceFilters />}
        {category === 'TAEKWONDOBELT' && <FilterTaekwondoBelt />}


        <ProductList products={products} />
        <AboutUsSection />
        <Footer />
      </FilterContextProvider>
    </main>
  )
}
