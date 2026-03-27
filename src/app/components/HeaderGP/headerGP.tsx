import "./styles.scss";
import Image from "next/image";

const HeaderGP = () => {
	const logoWidth = 256;
	const logoHeight = logoWidth / 3;

	const navLinks = [
		{
			label: "HOME",
			path: "/",
		},
		{
			label: "SAVED",
			path: "/saved",
		},
		{
			label: "CREATE",
			path: "/create",
		},
	];

	return (
		<header className="gp-header">
			<nav className="header-nav">
				<Image src="/assets/logo/GPLogo.svg" alt="GoodPlates Logo" width={logoWidth} height={logoHeight} />
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
