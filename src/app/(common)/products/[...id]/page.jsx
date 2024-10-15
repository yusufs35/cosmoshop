import { PageHeader } from "@/components/page-header";
import { ProductDetails } from "@/components/product-details";
import { RelatedProducts } from "@/components/related-products";
import React from "react";


const API_URL = "https://66c395ffd057009ee9c0b957.mockapi.io/products"

export const generateMetadata = async ({params}) => {
	const res = await fetch(`${API_URL}/${params.id}`);
	const data = await res.json();

	// fetching data
	return {
		title: data.title,
		description: data.description,
	};
};


const Page = async ({ params }) => {
	
	const fetchProduct =  (await fetch(`${API_URL}/${params.id}`)).json();
	const fetchRelatedProdcuts = (await fetch(API_URL)).json();
	
	const [product, relatedProducts] = await Promise.all([fetchProduct, fetchRelatedProdcuts]);

	return (
		<>
			<PageHeader title={product.title} />
			<ProductDetails product={product} />
			<RelatedProducts relatedProducts={relatedProducts} />
		</>
	);
};

export default Page;
