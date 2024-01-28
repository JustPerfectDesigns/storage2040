"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import Logo from "../public/images/Storage2040.png";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navLinks = [
	{ name: "20ft Container", href: "/20ft-Unit" },
	// { name: "25ft Container", href: "/25ft-Unit" },
	{ name: "40ft Container", href: "/40ft-Unit" },
	// { name: "45ft Container", href: "/45ft-Unit" },
];

const links = [
	{ name: "Home", href: "/" },
	{ name: "About Us", href: "/about-us" },
	{ name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
	const pathname = usePathname();
	const { handleCartClick, cartCount } = useShoppingCart(); // Get cartCount

	return (
		<header className="hidden lg:block mb-8 border-b">
			<div className="flex items-center justify-between md:container">
				<Link href="/">
					<Image
						height={100}
						width={100}
						alt="Container Merchant Logo"
						src={Logo}
						className="w-[180px]"
						unoptimized
						priority
					/>
				</Link>

				{/* <nav className="hidden gap-12 lg:flex 2xl:ml-16">
					{links.map((link, idx) => (
						<div key={idx}>
							<Link
								href={link.href}
								className={`font-semibold ${
									pathname === link.href
										? "text-orange-600"
										: "text-gray-800 hover:text-orange-600"
								}`}
							>
								{link.name}
							</Link>
						</div>
					))}
				</nav> */}

				<nav className="hidden gap-12 lg:flex 2xl:ml-16">
					{links.map((link, idx) => (
						<div key={idx}>
							<Link
								href={link.href}
								className={`font-semibold text-base ${
									pathname === link.href
										? "text-orange-600"
										: "text-gray-800 hover:text-orange-600"
								}`}
							>
								{link.name}
							</Link>
						</div>
					))}
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="p-0 m-0 h-0 font-semibold text-base">
									<p className="group-data-[state=open]:text-orange-600 group-data-[state=open]:bg-transparent">
										Our Containers
									</p>
								</NavigationMenuTrigger>
								<NavigationMenuContent className="w-[240px] md:w-[300px] overflow-y-auto">
									<ul className="grid grid-cols-2 w-full gap-6 p-4 ">
										{navLinks.map((link, index) => (
											<li key={index} className="w-full">
												<Link
													href={link.href}
													className={`font-semibold text-base ${
														pathname === link.href
															? "text-orange-600"
															: "text-gray-800 hover:text-orange-600"
													}`}
												>
													<NavigationMenuLink className="">
														{link.name}
													</NavigationMenuLink>
												</Link>
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</nav>

				<div className="flex divide-x border-r sm:border-l">
					<Button
						variant={"outline"}
						onClick={() => handleCartClick()}
						className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none relative" // Add relative positioning
					>
						<ShoppingBag />
						{cartCount > 0 && ( // Display count only if items are in the cart
							<div className="flex justify-center items-center absolute inset-[69%] p-2.5 top-5 right-5 rounded-full bg-red-500">
								<span className="hidden text-xs font-semibold sm:block text-white">
									{cartCount}
								</span>
							</div>
						)}
						<span className="hidden text-xs font-semibold text-gray-500 sm:block">
							Cart
						</span>
					</Button>
				</div>
			</div>
		</header>
	);
}
