import Layout from "@/Base/Layout";
import { useForm, useWatch } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { InputControlled } from "@/Components/Input";
import ProductCard from "@/Components/ProductCard";
import { CategoryLayout, CategoryForm, CategoryFormLayout, CategoryListingContainer, SearchCategoryForm } from "@/styles/categories";
import { ButtonComponent } from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";
import { BadgeBall, CategoryBadge } from "@/Components/ProductCard/style";

export default function Categories({ errors: propsErrors, categories }) {
  const [color, setColor] = useState("#ffffff");
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, }
  } = useForm();

  useEffect(() => {
    if (!propsErrors) return;
    Object.keys(propsErrors).map((key) => {
      setError(key, { type: 'custom', message: propsErrors[key] });
    });
  }, [propsErrors]);

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

  const colorSelectorStyle = {
    width: '18.625rem',
    height: '14.95rem',
  }

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


  async function create(data) {
    data.color = color;
    await Inertia.post('/categories', data)
  }

  return (
    <>
      <Layout>
        <CategoryLayout>
          <CategoryFormLayout>
            <ProductCard product={product} />
            <CategoryForm>
              <HexColorPicker style={colorSelectorStyle} color={color} onChange={setColor} />
              <form onSubmit={handleSubmit(create)}>
                <InputControlled control={control} label="Name" type="text" name="name" max='12' />
                <ButtonComponent name="Create" />
              </form>
            </CategoryForm>
          </CategoryFormLayout>
          <SearchCategoryForm>
            <InputControlled control={control} label="Search" type="text" name="search" max='12' />
          </SearchCategoryForm>
          <CategoryListingContainer>
            {categories.map((category) => {
              return (
                <CategoryBadge color={category.color}>
                  <BadgeBall color={category.color} />
                  {category.name}
                </CategoryBadge>
              )
            })}
          </CategoryListingContainer>
        </CategoryLayout>
      </Layout>
    </>
  )
}
