import { Layout } from "@/Base/Layout";
import { ProductCard } from "@/Components/ProductCard";
import { Inertia } from "@inertiajs/inertia";
import React from "react";

function logout() {
	Inertia.delete('/users/logout')
}

export default function Home({ errors, products = [] }) {
	return (
		<>
			{/* <button onClick={logout}>Loguot</button> */}
			<Layout>
				{products.map((product) => {
					return (
						<ProductCard product={product} />
					);
				})}
			</Layout>
		</>
	)
}
