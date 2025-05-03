import { useSession } from "next-auth/react";

function dashboard() {
    const { data: session } = useSession();

    return (
        <div>
            <h1>Bem-vindo, {session?.user?.name}</h1>
            <p>Seu ID: {session?.user?.id}</p>
        </div>
    );
};
export default dashboard;