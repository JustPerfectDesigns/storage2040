import { merriweather, montserrat } from "./fonts/fonts";
import "./globals.css";

import Header from "../components/Header";
import MobileHeader from "@/components/MobileHeader";
import CartProvider from "@/components/Providers";
import Navbar from "@/components/Navbar";
import ShoppingCartModal from "@/components/ShoppingCartModal";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Storage2040",
	description: "Home of Quality Shipping Containers | Reliability at its peak",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${merriweather.variable} ${montserrat.variable}`}>
				<CartProvider>
					{/* <div className="hidden lg:flex py-6 bg-white"> */}
					{/* <Header /> */}
					<Navbar />
					{/* </div> */}
					<div className="lg:hidden py-4 bg-white">
						<MobileHeader />
						<ShoppingCartModal />
					</div>
					<div className="mb-20 lg:mb-28">{children}</div>

					<div className="mt-44 md:mt-48 lg:mt-72">
						<Footer />
					</div>
					<ToastContainer
						position="bottom-center"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="dark"
					/>
				</CartProvider>
			</body>
		</html>
	);
}
