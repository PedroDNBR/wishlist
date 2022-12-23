import { Layout } from "@/Base/Layout";
import { ProductsContainer } from "@/Base/style";
import { HomeSearchBar } from "@/Components/HomeSearchBar";
import { ProductCard } from "@/Components/ProductCard";
import { CardInList } from "@/Components/ProductCard/style";
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
				{/* <HomeSearchBar/> */}
				<ProductsContainer>
					{products.map((product) => {
						return (
							<CardInList>
								<ProductCard key={product.id} product={product} />
							</CardInList>
						);
					})}
				</ProductsContainer>
			</Layout>
		</>
	)
}
