// ... outros imports
import { AboutUsSection } from "./componets/About-us"
import { BannerMain } from "./componets/Banner-main"
import ProductList from "./componets/Product-list"
import { Footer } from "./componets/Footer"
import NavBar from "./componets/Nav-bar"

import { FilterContextProvider } from "./context/Filter-context"

const Dashboard = () => {
  return (
    <main>
      <FilterContextProvider>
        <NavBar />
      </FilterContextProvider>
      <BannerMain />
      <ProductList />
      <AboutUsSection />
      <FilterContextProvider>
        <Footer />
      </FilterContextProvider>
    </main>
  )
}

export default Dashboard