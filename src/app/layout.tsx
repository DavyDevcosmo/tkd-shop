import type { Metadata } from "next";
import "./globals.css";

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
			</body>
		</html>
	);
}
