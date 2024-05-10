import AddToBag from "../../../components/AddToBag";
import CheckoutNow from "../../../components/CheckoutNow";
import ImageGallery from "../../../components/ImageGallery";
// import { fullProduct } from "@/app/interface";
import { client } from "../../../app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import Link from "next/link";
import SimilarItems from "@/components/SimilarItems";

async function getData(slug) {
	const query = `*[_type == "product" && slug.current == "${slug}"][0] {
         _id,
         images,
         price,
         name,
         description,
         info,
         "slug": slug.current,
         "categoryName": category->name,
         price_id
      }`;
	const data = await client.fetch(query);

	return data;
}

export const dynamic = "force-dynamic";

export default async function ProductPge({ params }) {
	const data = await getData(params.slug);

	return (
		<div className="bg-white ml-5 mr-5 md:container lg:container mx-auto max-w-screen-xl">
			<div className="">
				<div className="grid gap-8 lg:flex lg:gap-12">
					<div className="lg:flex-1">
						<ImageGallery images={data.images} />
					</div>

					<div className="md:py-8 lg:flex-1">
						<div className="mb-2 md:mb-3">
							<Link
								href={`/${data.categoryName}`}
								className="mb-2 inline-block text-gray-500 text-sm font-semibold hover:text-orange-600 transition-all"
							>
								{data.categoryName}
							</Link>
							<h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
								{data.name}
							</h2>
						</div>

						{/* <div className="mb-6 flex items-center gap-3 md:mb-10">
							<Button variant="outline" className="rounded-full gap-x-2">
								<span className="text-sm">4.9</span>
								<Star className="h-5 w-5 text-yellow-500" />
							</Button>

							<span className="text-sm text-gray-500 transition duration-100">
								56 Ratings
							</span>
						</div> */}

						<div className="mb-4">
							<div className="flex items-end gap-2">
								<span className="text-xl font-bold text-gray-800 md:text-2xl">
									${data.price}
								</span>
								{/* <span className="mb-0.5 text-red-500 line-through">
									${data.price + 30}
								</span> */}
							</div>

							{/* <span className="text-sm text-gray-500">
								Incl. Vat plus shipping
							</span> */}
						</div>

						<div className="mb-6 flex items-center gap-2 text-gray-500">
							<Truck className="w-6 h-6" />
							<span className="text-sm">2-4 Days Shipping</span>
						</div>

						<div className="flex gap-2.5 md:w-1/2">
							<AddToBag
								currency="USD"
								description={data.description}
								image={data.images[0]}
								name={data.name}
								price={data.price}
								key={data._id}
								price_id={data.price_id}
							/>
							{/* <Button>Add to Cart</Button>
							<Button>Checkout Now</Button> */}
							<CheckoutNow
								currency="USD"
								description={data.description}
								image={data.images[0]}
								name={data.name}
								price={data.price}
								key={data._id}
								price_id={data.price_id}
							/>
						</div>

						<p className="mt-12 text-base text-gray-500 tracking-wide">
							{data.description}
						</p>
						<div className="mt-8">
							<p className="text-base mb-2 text-gray-800 font-semibold">
								Additional Information
							</p>
							<p className="text-base text-gray-500 tracking-wide">
								{data.info}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div>
				<SimilarItems category={data.categoryName} />
			</div>
		</div>
	);
}
