import Layout from "@/Base/Layout";
import { useForm, useWatch } from "react-hook-form";
import { BadgeBall, CategoryBadge } from "@/Components/ProductCard/style";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { InputControlled } from "@/Components/Input";
import ProductCard from "@/Components/ProductCard";

export default function Categories({ errors: propsErrors }) {
  const [color, setColor] = useState("#aabbcc");
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


  async function register(data) {
  }

  return (
    <>
      {/* <button onClick={logout}>Loguot</button> */}
      <Layout>
        <div>
          <ProductCard color={color} categoryName={categoryName} />
        </div>
        <HexColorPicker color={color} onChange={setColor} />
        <CategoryBadge color={color}>
          <BadgeBall color={color} />
          {categoryName}
        </CategoryBadge>
        <form onSubmit={handleSubmit(register)}>
          <InputControlled control={control} label="Nome" type="text" name="name" max='12' />
        </form>
      </Layout>
    </>
  )
}
