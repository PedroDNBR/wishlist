import { Layout } from "@/Base/Layout";
import { ButtonComponent } from "@/Components/Button";
import { CategoryFormLayout, Container } from "@/Components/CategoryForm/styles";
import { InputControlled } from "@/Components/Input";
import { ProductCard } from "@/Components/ProductCard";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

export default function Home({ errors }) {
  const {
    control,
    setError,
    reset,
    setValue,
  } = useForm();

  const [product, setProduct] = useState({
    name: "Produto Favorito",
    price: 3000,
    categories: [
    ]
  });

  const productName = useWatch({
    control,
    name: "name",
  });

  const productPrice = useWatch({
    control,
    name: "lowest_price",
  });

  const productUrl = useWatch({
    control,
    name: "url",
  });

  useEffect(() => {
    let price = productPrice ?? '';
    price = price.replace(/\D/g, "");
    price = price.replace(/(\d)(\d{2})$/, "$1.$2");
    price = price.replace(/(?=(\d{3})+(\D))\B/g, ",");
    setValue('lowest_price', price);
  }, [productPrice])

  useEffect(() => {
    setProduct({
      name: productName ? productName : "Produto Favorito",
      price: productPrice ? productPrice : 3000,
      url: productUrl,
      categories: [
      ]
    });
  }, [productName, productPrice, productUrl])

  return (
    <>
      <Layout>
        <CategoryFormLayout>
          <ProductCard product={product} />
          <Container>
            <form>
              <InputControlled control={control} label="Name" type="text" name="name" max="55" />
              <InputControlled control={control} label="URL" type="text" name="url" />
              <InputControlled control={control} label="Lowest Price" type="text" max="18" name="lowest_price" />
              <ButtonComponent name="Create" />
            </form>
          </Container>
        </CategoryFormLayout>
      </Layout>
    </>
  )
}