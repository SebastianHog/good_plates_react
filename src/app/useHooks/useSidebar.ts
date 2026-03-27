"use client";

import { useState } from "react";

export const useSidebar = () => {
	const [sidebarState, setSidebarState] = useState(true);
	const toggleSidebar = () => setSidebarState((state) => !state);
	return { sidebarState, toggleSidebar };
};
