
"use client"
import { useSession } from "next-auth/react";

import NavBar from "./componets/navBar";
import { FilterContextProvider } from "./context/filter-context";
import { BannerMain } from "./componets/banner-main";
import { AboutUsSection } from "./componets/AboutUsSection";


const Dashboard = () => {
  return (
    <main>
      <FilterContextProvider>
        <NavBar />
      </FilterContextProvider>
      <BannerMain />
      <AboutUsSection />
    </main>

  )

};

export default Dashboard;