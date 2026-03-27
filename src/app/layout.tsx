import type { Metadata } from "next";
import HeaderGP from "./components/HeaderGP/HeaderGP";
import "./globals.scss";

export const metadata: Metadata = {
	title: "GoodPlates - React",
	description: "GoodPlates, a good place for your recipes.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<HeaderGP />
				<main>{children}</main>
			</body>
		</html>
	);
}
