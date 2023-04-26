import { Layout } from "@/Base/Layout";
import { ProductsContainer } from "@/Base/style";
import { HomeSearchBar } from "@/Components/HomeSearchBar";
import { ProductCard } from "@/Components/ProductCard";
import { CardInList } from "@/Components/ProductCard/style";
import { Category } from "@/Types/Category";
import { Product } from "@/Types/Product";
import { User } from "@/Types/User";
import { Head, router } from '@inertiajs/react';
import React from "react";
import { useTranslation } from "react-i18next";

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
  }
}

export default function Home({ errors, products = [], categories = [], request, auth: { user } }: HomeProps) {
	const { t } = useTranslation();
	const title: string = t('labels:wishes');
	return (
		<>
			<Layout user={user}>
        <Head title={title}/>
				<HomeSearchBar categories={categories} request={request} />
				<ProductsContainer>
					{products.map((product) => {
						return (
							<CardInList key={product.id}>
								<ProductCard key={product.id} product={product} canEditingProduct={true} />
							</CardInList>
						);
					})}
				</ProductsContainer>
			</Layout>
		</>
	)
}
