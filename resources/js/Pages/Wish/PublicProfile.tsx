import { Layout } from "@/Base/Layout";
import { ProductsContainer } from "@/Base/style";
import { HomeSearchBar } from "@/Components/HomeSearchBar";
import { ProductCard } from "@/Components/ProductCard";
import { CardInList } from "@/Components/ProductCard/style";
import { PublicProfileHeader } from "@/Components/PublicProfileHeader";
import { Category } from "@/Types/Category";
import { Product } from "@/Types/Product";
import { User } from "@/Types/User";
import { Head, router } from '@inertiajs/react';
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
	auth: {
    user: User;
  };
  profile_user: User;
}

export default function PublicProfile({ errors, products = [], categories = [], request, auth: { user: authUser }, profile_user }: HomeProps) {
	return (
		<>
			<Layout user={authUser}>
        <Head title="Wishes"/>
				<HomeSearchBar categories={categories} request={request} public_user={profile_user} />
        <PublicProfileHeader user={profile_user} products={products} categories={categories} />
				<ProductsContainer>
					{products.map((product) => {
						return (
							<CardInList key={product.id}>
								<ProductCard key={product.id} product={product} canEditingProduct={false} />
							</CardInList>
						);
					})}
				</ProductsContainer>
			</Layout>
		</>
	)
}
