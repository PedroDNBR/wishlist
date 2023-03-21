import { Layout } from "@/Base/Layout";
import { Category } from "@/Types/Category";
import CreateProduct from "@/Components/Forms/Product/CreateProduct";
import { User } from "@/Types/User";
import { Head } from "@inertiajs/react";

interface CreateProductProps {
  errors: Record<string, string>;
  categories: Category[];
  auth: {
    user: User;
  }
}

export default function Products({ errors, categories, auth: { user } }: CreateProductProps) {
  return (
    <>
      <Layout user={user}>
        <Head title="Create Product"/>
        <CreateProduct errors={errors} categories={categories} />
      </Layout>
    </>
  )
}