import Layout from "@/Base/Layout";
import { useForm, useWatch } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { InputControlled } from "@/Components/Input";
import ProductCard from "@/Components/ProductCard";
import { CategoryForm, CategoryLayout } from "@/styles/categories";

export default function Categories({ errors: propsErrors }) {
  const [color, setColor] = useState("#ffffff");

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, }
  } = useForm();

  const categoryName = useWatch({
    control,
    name: "name",
  });

  const [product, setProduct] = useState({
    name: "Produto Favorito",
    price: 3000,
    category: {
      name: categoryName,
      color: color,
    }
  });

  useEffect(() => {
    setProduct({
      name: "Produto Favorito",
      price: 3000,
      category: {
        name: categoryName,
        color: color,
      }
    });
  }, [categoryName, color])


  async function register(data) {
  }

  return (
    <>
      {/* <button onClick={logout}>Loguot</button> */}
      <Layout>
        <CategoryLayout>
          <ProductCard product={product} />
          <CategoryForm>
            <HexColorPicker color={color} onChange={setColor} />
            <form onSubmit={handleSubmit(register)}>
              <InputControlled control={control} label="Nome" type="text" name="name" max='12' />
            </form>
          </CategoryForm>
        </CategoryLayout>
      </Layout>
    </>
  )
}
