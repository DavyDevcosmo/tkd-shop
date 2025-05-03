
"use client"
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Bem-vindo, {session?.user?.name}</h1>
      <p>Seu ID: {session?.user?.id}</p>
    </div>
  );
};

export default Dashboard;