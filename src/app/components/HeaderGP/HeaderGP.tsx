"use client";

import { useState, useEffect } from "react";
import "./styles.scss";
import Image from "next/image";
import { useIsMobile } from "@/app/useHooks/useIsMobile";

const HeaderGP = () => {
	const [logoPath, setLogoPath] = useState("/assets/logo/GPLogo.svg");
	const [menuPath, setMenuPath] = useState("/assets/icons/menu.svg");
	const isMobile = useIsMobile();

	useEffect(() => {
		setLogoPath(isMobile ? "/assets/logo/GPLogoPlates.svg" : "/assets/logo/GPLogo.svg");
	}, [isMobile]);

	const logoWidth = isMobile ? 64 : 256;
	const logoHeight = isMobile ? 64 : logoWidth / 3;

	const menuIconSize = 48;

	const navLinks = [
		{ label: "HOME", path: "/" },
		{ label: "SAVED", path: "/saved" },
		{ label: "CREATE", path: "/create" },
	];

	const openSidebar = () => {
		console.log("Open sidebar");
	};

	return (
		<header className="gp-header">
			<nav className="header-nav">
				<Image src={logoPath} alt="GoodPlates Logo" width={logoWidth} height={logoHeight} />

				{isMobile ? (
					<Image src={menuPath} alt="Open sidebar" width={menuIconSize} height={menuIconSize} onClick={openSidebar} />
				) : (
					<ul>
						{navLinks.map((link) => (
							<li key={link.path}>
								<a href={link.path}>{link.label}</a>
							</li>
						))}
					</ul>
				)}
			</nav>
		</header>
	);
};

export default HeaderGP;
