import { Layout } from "@/Base/Layout";
import UpdateProduct from "@/Components/Forms/Product/UpdateProduct";
import { Category } from "@/Types/Category";
import { Product } from "@/Types/Product";

interface UpdateProductProps {
  product: Product;
  errors: Record<string, string> | undefined | null;
  categories: Category[];
}

export default function ProductEdit({ errors, categories, product }: UpdateProductProps) {
  return (
    <>
      <Layout>
        <UpdateProduct errors={errors} categories={categories} product={product} />
      </Layout>
    </>
  )
}