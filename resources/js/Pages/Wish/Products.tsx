import { Layout } from "@/Base/Layout";
import { Category } from "@/Types/Category";
import ProductForm from "@/Components/ProductForm";

interface CreateProductProps {
  errors: Record<string, string>;
  categories: Category[];
}

export default function Products({ errors, categories }: CreateProductProps) {
  return (
    <>
      <Layout>
        <ProductForm errors={errors} categories={categories} />
      </Layout>
    </>
  )
}