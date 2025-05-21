
"use client"
import { useSession } from "next-auth/react";

import NavBar from "./componets/navBar";
import { FilterContextProvider } from "./context/filter-context";
import { BannerMain } from "./componets/banner-main";


const Dashboard = () => {
  return (
    <main>
      <FilterContextProvider>
        <NavBar />
      </FilterContextProvider>
      <BannerMain />
    </main>

  )

};

export default Dashboard;