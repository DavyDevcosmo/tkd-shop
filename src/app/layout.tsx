import type { Metadata } from "next";
import "./globals.css";


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
		<html lang="en">
			<body className={""}>

				{children}

			</body>
		</html>
	);
}
