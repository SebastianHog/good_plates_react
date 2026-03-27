"use client";

import HeaderGP from "../HeaderGP/HeaderGP";
import Sidebar from "../Sidebar/Sidebar";
import { useSidebar } from "../../useHooks/useSidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	const { sidebarState, toggleSidebar } = useSidebar();

	return (
		<>
			{!sidebarState && <Sidebar />}
			<HeaderGP />
			<main>
				{children}
				<button onClick={toggleSidebar}>sidebar</button>
			</main>
		</>
	);
}
