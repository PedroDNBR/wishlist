import { Layout } from "@/Base/Layout";
import { ProductCard } from "@/Components/ProductCard";
import { Product } from "@/Types/Product";
import { Inertia } from "@inertiajs/inertia";
import React from "react";

function logout() {
	Inertia.delete('/users/logout')
}

interface HomeProps {
  errors: Record<string, string>;
  products: Product[];
}

export default function Home({ errors, products = [] }: HomeProps) {
	return (
		<>
			{/* <button onClick={logout}>Loguot</button> */}
			<Layout>
				{products.map((product) => {
					return (
						<ProductCard key={product.id} product={product} />
					);
				})}
			</Layout>
		</>
	)
}
