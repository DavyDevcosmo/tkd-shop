
"use client"
import { useSession } from "next-auth/react";

import NavBar from "./componets/navBar";
import { FilterContextProvider } from "./context/filter-context";


const Dashboard = () => {
  return (
    <FilterContextProvider>
      <NavBar />
    </FilterContextProvider>
  )

};

export default Dashboard;