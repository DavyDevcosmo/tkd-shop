
"use client"
import { useSession } from "next-auth/react";

import NavBar from "./componets/Nav-bar";
import { FilterContextProvider } from "./context/Filter-context";
import { AboutUsSection } from "./componets/About-us";
import { BannerMain } from "./componets/Banner-main";
import { Footer } from "./componets/Footer";


const Dashboard = () => {
  return (
    <main>
      <FilterContextProvider>
        <NavBar />
      </FilterContextProvider>
      <BannerMain />
      <AboutUsSection />
      <FilterContextProvider>
        <Footer />
      </FilterContextProvider>
    </main>

  )

};

export default Dashboard;