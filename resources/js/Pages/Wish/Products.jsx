import { Layout } from "@/Base/Layout";
import { ButtonComponent } from "@/Components/Button";
import { CategoryFormLayout, Container } from "@/Components/CategoryForm/styles";
import { InputControlled } from "@/Components/Input";
import { ProductCard } from "@/Components/ProductCard";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Dropdown } from "@/Components/Dropdown";
import { Item, Trigger } from "@/Components/Dropdown/styles";
import { GoPlus } from 'react-icons/go'

export default function Home({ errors, categories }) {
  const {
    control,
    setError,
    reset,
    setValue,
  } = useForm();

  const [productCategories, setProductCategories] = useState([]);

  const [product, setProduct] = useState({
    name: "Produto Favorito",
    price: 3000,
    categories: productCategories,
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
      categories: productCategories
    });
  }, [productName, productPrice, productUrl, productCategories])

  return (
    <>
      <Layout>
        <CategoryFormLayout>
          <ProductCard product={product}>
            <DropdownMenu.Root>
              <div>
                <Trigger><GoPlus /></Trigger>
              </div>
              <Dropdown side="right" align="start">
                {categories.map((category) => {
                  return (
                    <button key={category.id} onClick={() => setProductCategories([...productCategories, category])}>
                      <Item color={category.color}>
                        {category.name}
                      </Item>
                    </button>
                  )
                })}
              </Dropdown>
            </DropdownMenu.Root>
          </ProductCard>
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