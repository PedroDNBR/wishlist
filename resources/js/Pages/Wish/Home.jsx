import { Layout } from "@/Base/Layout";
import { ProductCard } from "@/Components/ProductCard";
import { Inertia } from "@inertiajs/inertia";
import React from "react";

function logout() {
	Inertia.delete('/users/logout')
}

export default function Home({ errors }) {
	return (
		<>
			{/* <button onClick={logout}>Loguot</button> */}
			<Layout>
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</Layout>
		</>
	)
}
