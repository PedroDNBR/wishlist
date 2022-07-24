import Layout from "@/Base/Layout";
import { useForm, useWatch } from "react-hook-form";
import { BadgeBall, CategoryBadge } from "@/Components/ProductCard/style";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { InputControlled } from "@/Components/Input";

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


  console.log(categoryName);

  return (
    <>
      {/* <button onClick={logout}>Loguot</button> */}
      <Layout>
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
