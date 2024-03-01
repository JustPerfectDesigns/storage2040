"use client";
// ShoppingCartModal.jsx

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { Trash2Icon, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ShoppingCartModal() {
	const [isSendingEmail, setIsSendingEmail] = useState(false);
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

	const {
		shouldDisplayCart,
		handleCartClick,
		cartDetails,
		removeItem,
		totalPrice,
	} = useShoppingCart();

	const handleCheckoutClick = async () => {
		setIsSendingEmail(true);
		try {
			// const hostname = process.env.NEXT_PUBLIC_URL;
			const response = await fetch(`/api/sendEmail`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					subject: "New Order Received",
					items: Object.values(cartDetails),
					totalPrice: totalPrice,
					email: email,
					address: address,
				}),
			});

			// console.log("Cart Details:", cartDetails);
			// console.log(totalPrice);

			if (!response.ok) {
				throw new Error("Failed to send email notification to admin");
			}

			if (response.ok) {
				toast.success(
					"Checkout Successful! You'll receive an invoice in your email shortly",
					{
						position: "bottom-center",
						autoClose: 9000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
						// transition: Bounce,
					}
				);
				handleCartClick();
			}

			// console.log("Email notification sent to admin");

			// Handle success, e.g., show thank you message, redirect to success page, etc.
		} catch (error) {
			console.error("Error during checkout:", error);
			// Handle error (e.g., display error message to user)
		} finally {
			setIsSendingEmail(false);
		}
	};

	return (
		<Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
			<SheetContent className="sm:max-w-lg w-[90vw]">
				<SheetHeader>
					<SheetTitle>Shopping Cart</SheetTitle>
				</SheetHeader>
				<SheetClose
					asChild
					className="absolute top-5 right-5 border rounded-none"
				>
					<Button variant="ghost" type="submit" size="sm">
						<X size={18} />
					</Button>
				</SheetClose>

				<div className="h-full flex flex-col justify-between">
					<div className="mt-8 flex-1 overflow-y-auto">
						<ul className="-my-6 divide-y divide-gray-200">
							{cartDetails.length === 0 ? (
								<h3 className="py-6">You don&apso;t have any items</h3>
							) : (
								<>
									{Object.values(cartDetails ?? {}).map((entry) => (
										<li key={entry.id} className="flex py-6">
											<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
												<Image
													src={entry.image}
													alt="Product image"
													width={100}
													height={100}
													objectFit="cover"
													className="object-cover h-full w-auto"
												/>
											</div>

											<div className="ml-4 flex flex-1 flex-col">
												<div>
													<div className="flex justify-between text-sm font-semibold md:text-base md:font-medium text-gray-900 ">
														<h3 className="line-clamp-2 md:line-clamp-none">
															{entry.name}
														</h3>
														<p className="ml-4">${entry.price}</p>
													</div>
													<p className="mt-1 text-sm text-gray-500 line-clamp-1 md:line-clamp-2">
														{entry.description}
													</p>
												</div>

												<div className="mt-2 flex flex-1 items-center justify-between text-sm">
													<p className="text-gray-500">QTY: {entry.quantity}</p>

													<div className="flex justify-center items-center">
														<button
															type="button"
															onClick={() => removeItem(entry.id)}
															className="font-medium flex justify-center items-center gap-1"
														>
															<span className="text-sm text-orange-700">
																Clear
															</span>
															<Trash2Icon
																className="text-orange-700"
																size={16}
															/>
														</button>
													</div>
												</div>
											</div>
										</li>
									))}
								</>
							)}
						</ul>
					</div>

					<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
						<form className="space-y-4 mb-4">
							<div className="flex flex-col items-start w-full justify-start">
								<h2 className="text-lg font-semibold text-foreground">
									Shipping Details
								</h2>
							</div>
							<div className="relative flex flex-col space-y-1">
								<input
									name="email"
									type="email"
									id="email"
									required
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									placeholder="Your Email Address"
									className="rounded-xl border-2 border-gray-400 p-2 placeholder:text-gray-700 placeholder:font-medium"
								/>
							</div>
							<div className="relative flex flex-col space-y-1">
								<textarea
									name="address"
									id="address"
									required
									cols={10}
									rows={3}
									value={address}
									onChange={(e) => {
										setAddress(e.target.value);
									}}
									placeholder="Delivery Address"
									className="rounded-xl border-2 border-gray-400 p-2 placeholder:text-gray-700 placeholder:font-medium"
								/>
							</div>
							{/* <button
								type="submit"
								className="ml-auto flex w-1/2 items-center justify-center space-x-3 rounded-lg bg-blue-600 p-2 text-white shadow-blue-500 hover:bg-blue-700 hover:shadow-md"
							>
								<span>Send Message</span>
							</button> */}
						</form>
						<div className="flex justify-between text-base font-medium text-gray-900">
							<p>Subtotal:</p>
							<p>${totalPrice}</p>
						</div>
						<p className="mt-0.5 text-sm text-gray-500">
							Shipping and taxes are calculated at checkout.
						</p>

						<div className="mt-6">
							<Button
								onClick={handleCheckoutClick}
								disabled={isSendingEmail}
								className="w-full"
							>
								Checkout
							</Button>
						</div>

						<div className="mt-6 flex justify-center text-center text-sm text-gray-500">
							<p>
								OR{" "}
								<button
									onClick={() => handleCartClick()}
									className="font-medium text-primary hover:text-primary/80"
								>
									Continue Shopping
								</button>
							</p>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
