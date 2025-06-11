
"use client"

import NavBar from "./componets/Nav-bar";
import { FilterContextProvider } from "./context/Filter-context";
import { AboutUsSection } from "./componets/About-us";
import { BannerMain } from "./componets/Banner-main";
import { Footer } from "./componets/Footer";
import ProductCard from "./componets/Product-card";
import ProductList from "./componets/Card-list";


const Dashboard = () => {
  return (
    <main>
      <FilterContextProvider>
        <NavBar />
        <ProductList />
      </FilterContextProvider>
      <ProductCard />
      <BannerMain />
      <AboutUsSection />
      <FilterContextProvider>
        <Footer />
      </FilterContextProvider>
    </main>

  )

};

export default Dashboard;