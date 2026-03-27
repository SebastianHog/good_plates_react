"use client";

import { useState, useEffect } from "react";
import "./styles.scss";
import Image from "next/image";
import { useIsMobile } from "@/app/useHooks/useIsMobile";

const HeaderGP = () => {
	const logoWidth = 256;
	const logoHeight = logoWidth / 3;

	const [imagePath, setImagePath] = useState("/assets/logo/GPLogo.svg");
	const isMobile = useIsMobile();

	useEffect(() => {
		setImagePath(isMobile ? "/assets/logo/GPLogoPlates.svg" : "/assets/logo/GPLogo.svg");
	}, [isMobile]);

	const navLinks = [
		{ label: "HOME", path: "/" },
		{ label: "SAVED", path: "/saved" },
		{ label: "CREATE", path: "/create" },
	];

	return (
		<header className="gp-header">
			<nav className="header-nav">
				<Image src={imagePath} alt="GoodPlates Logo" width={logoWidth} height={logoHeight} />
				<ul>
					{navLinks.map((link) => (
						<li key={link.path}>
							<a href={link.path}>{link.label}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default HeaderGP;
