import { Layout } from "@/Base/Layout";
import { ProductsContainer } from "@/Base/style";
import { HomeSearchBar } from "@/Components/HomeSearchBar";
import { ProductCard } from "@/Components/ProductCard";
import { CardInList } from "@/Components/ProductCard/style";
import { Category } from "@/Types/Category";
import { Product } from "@/Types/Product";
import { Inertia } from "@inertiajs/inertia";
import React from "react";

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
			<Layout>
				<HomeSearchBar categories={categories} request={request} />
				<ProductsContainer>
					{products.map((product) => {
						return (
							<CardInList key={product.id}>
								<ProductCard key={product.id} product={product} canEditingProduct={true} categories={categories} errors={errors} />
							</CardInList>
						);
					})}
				</ProductsContainer>
			</Layout>
		</>
	)
}
