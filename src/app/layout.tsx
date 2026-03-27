import type { Metadata } from "next";
import "./globals.scss";
import ClientLayout from "./components/ClientLayout/ClientLayout";

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
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
