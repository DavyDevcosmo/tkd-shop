import type { Metadata } from "next";
import "./globals.css";


import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";


export const metadata: Metadata = {
	title: "TKD shop",
	description: "Ecommecer de Taekwondo",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">

			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="app-body">
				<div>
					<SessionProvider>{children}</SessionProvider>
				</div>
				<ToastContainer
					position="top-right"
					autoClose={3000}
					hideProgressBar={false}
					closeOnClick
					pauseOnHover
					draggable
					theme="light"
					transition={Bounce}
					limit={1} // evita vários toasts iguais ao mesmo tempo
				/>
			</body>
		</html>
	);
}
