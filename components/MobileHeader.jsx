"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MenuIcon, MenuSquare, ShoppingBag, X } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import Logo from "../public/images/Storage2040.png";

const links = [
	{ name: "Home", href: "/" },
	{ name: "About Us", href: "/about-us" },
	{ name: "Shop", href: "/container" },
	{ name: "Contact Us", href: "/contact-us" },
];

const navLinks = [
	{ name: "20ft Container", href: "/20ft-Unit" },
	// { name: "25ft Container", href: "/25ft-Unit" },
	{ name: "40ft Container", href: "/40ft-Unit" },
	// { name: "45ft Container", href: "/45ft-Unit" },
];

export default function Navbar() {
	const pathname = usePathname();
	const { handleCartClick, cartCount } = useShoppingCart(); // Get cartCount

	return (
		<header className="ml-5 mr-5 lg:block mb-8 border-b">
			<div className="flex items-center justify-between md:container">
				<Link href="/">
					<Image
						height={100}
						width={100}
						alt="Container Merchant Logo"
						src={Logo}
						className="w-[140px]"
						unoptimized
						priority
					/>
				</Link>

				<div className="flex justify-center items-center gap-2">
					<div className="flex divide-x border-r sm:border-l">
						<Button
							variant={"outline"}
							onClick={() => handleCartClick()}
							className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-none relative" // Add relative positioning
						>
							<ShoppingBag />
							{cartCount > 0 && ( // Display count only if items are in the cart
								<div className="flex justify-center items-center absolute inset-[69%] p-2.5 top-0 right-0 rounded-full bg-red-500">
									<span className="text-xs font-semibold sm:block text-white">
										{cartCount}
									</span>
								</div>
							)}
							<span className="hidden text-xs font-semibold text-gray-500 sm:block">
								Cart
							</span>
						</Button>
					</div>

					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="outline"
								className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-none"
							>
								<MenuSquare />
							</Button>
						</SheetTrigger>
						<SheetContent className="sm:max-w-lg w-[90vw]">
							<SheetHeader>
								<SheetTitle className="text-left underline text-xl">
									Menu
								</SheetTitle>
							</SheetHeader>
							<SheetClose
								asChild
								className="absolute top-5 right-5 border rounded-none"
							>
								<Button variant="ghost" type="submit" size="sm">
									<X size={18} />
								</Button>
							</SheetClose>

							<nav className="flex flex-col gap-8 mt-24">
								{links.map((link, idx) => (
									<div key={idx}>
										<SheetClose asChild>
											<Link
												href={link.href}
												className={`font-semibold text-[1.15rem] ${
													pathname === link.href
														? "text-orange-600"
														: "text-gray-800 hover:text-orange-600"
												}`}
											>
												{link.name}
											</Link>
										</SheetClose>
									</div>
								))}
								<NavigationMenu>
									<NavigationMenuList>
										<NavigationMenuItem>
											<NavigationMenuTrigger className="p-0 font-semibold text-[1.15rem]">
												<p className="group-data-[state=open]:text-orange-600 group-data-[state=open]:bg-transparent">
													Our Containers
												</p>
											</NavigationMenuTrigger>
											<NavigationMenuContent className="w-[240px] md:w-[300px] overflow-y-auto">
												<ul className="grid grid-cols-2 w-full gap-6 p-4 ">
													{navLinks.map((link, index) => (
														<li key={index} className="w-full">
															<SheetClose asChild>
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
															</SheetClose>
														</li>
													))}
												</ul>
											</NavigationMenuContent>
										</NavigationMenuItem>
									</NavigationMenuList>
								</NavigationMenu>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
