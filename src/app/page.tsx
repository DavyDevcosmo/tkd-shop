
import { AboutUsSection } from "./componets/About-us"
import ProductList, { Product } from "./componets/Product-list"
import { Footer } from "./componets/Footer"
import NavBar from "./componets/Nav-bar"
import db from "../../prisma/db"
import { FilterContextProvider } from "./context/filter-context"
import { BannerMain } from "./componets/banner-main"

type SearchParams = {
  q?: string;
  category?: string;
};

async function getProducts(searchTerm?: string, category?: string) {
  const where: any = {};
  if (searchTerm) {
    where.name = { contains: searchTerm, mode: 'insensitive' };
  }
  if (category && category !== 'ALL') {
    where.category = category;
  }
  return db.product.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });
}

export default async function Home({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const searchTerm = params?.q;
  const category = params?.category;
  const products = await getProducts(searchTerm, category);

  return (
    <main>
      <FilterContextProvider>
        <NavBar />
        <BannerMain />
        <ProductList products={products} />
        <AboutUsSection />
        <Footer />
      </FilterContextProvider>
    </main>
  )
}

