import { Merriweather, Montserrat } from "next/font/google";

export const merriweather = Merriweather({
	subsets: ["latin"],
	weight: ["300", "400", "700", "900"],
	variable: "--merriweather-font",
});

export const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	variable: "--montserrat-font",
});
