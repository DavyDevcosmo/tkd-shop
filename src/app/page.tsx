
"use client"
import { useSession } from "next-auth/react";

import NavBar from "./componets/Nav-bar";
import { FilterContextProvider } from "./context/Filter-context";
import { AboutUsSection } from "./componets/About-us";
import { BannerMain } from "./componets/Banner-main";


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