import { Layout } from "@/Base/Layout";
import { Category } from "@/Types/Category";
import CreateProduct from "@/Components/Forms/Product/CreateProduct";
import { User } from "@/Types/User";
import { Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

interface CreateProductProps {
  errors: Record<string, string>;
  categories: Category[];
  auth: {
    user: User;
  }
}

export default function Products({ errors, categories, auth: { user } }: CreateProductProps) {
  const { t } = useTranslation();
	const title: string = t('labels:create-product');
  return (
    <>
      <Layout user={user}>
        <Head title={title} />
        <CreateProduct errors={errors} categories={categories} />
      </Layout>
    </>
  )
}