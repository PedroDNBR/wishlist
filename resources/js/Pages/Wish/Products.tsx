import { Layout } from "@/Base/Layout";
import { Category } from "@/Types/Category";
import CreateProduct from "@/Components/Forms/Product/CreateProduct";

interface CreateProductProps {
  errors: Record<string, string>;
  categories: Category[];
}

export default function Products({ errors, categories }: CreateProductProps) {
  return (
    <>
      <Layout>
        <CreateProduct errors={errors} categories={categories} />
      </Layout>
    </>
  )
}