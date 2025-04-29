

import { auth } from "../app/auth";
import { redirect } from "next/navigation";

export default async function PaginaProtegida() {
  const session = await auth();

  if (!session) {
    // Redirecionar para a página de login
    redirect("/auth/login"); // você pode usar o redirect do next/navigation
  }

  return (
    <div>
      <h1>Bem-vindo, {session?.user?.name || "Usuário"}</h1>
    </div>
  );
}
