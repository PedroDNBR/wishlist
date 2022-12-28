import { Layout } from "@/Base/Layout";
import { ProductsContainer } from "@/Base/style";
import { HomeSearchBar } from "@/Components/HomeSearchBar";
import { ProductCard } from "@/Components/ProductCard";
import { CardInList } from "@/Components/ProductCard/style";
import { Category } from "@/Types/Category";
import { Product } from "@/Types/Product";
import { Inertia } from "@inertiajs/inertia";
import React from "react";

function logout() {
	Inertia.delete('/users/logout')
}

interface HomeProps {
  errors: Record<string, string>;
  products: Product[];
  categories: Category[];
	request?: {
    filter?: {
      categories?: string[];
      name?: string;
    },
    sort?: string;
  };
}

export default function Home({ errors, products = [], categories = [], request }: HomeProps) {
	return (
		<>
			{/* <button onClick={logout}>Loguot</button> */}
			<Layout>
				<HomeSearchBar categories={categories} request={request} />
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
