import Layout from "@/Base/Layout";
import { useForm, useWatch } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { InputControlled } from "@/Components/Input";
import ProductCard from "@/Components/ProductCard";
import { CategoryLayout, CategoryForm, CategoryFormLayout, CategoryListingContainer, SearchCategoryForm } from "@/styles/categories";
import { ButtonComponent } from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";
import { BadgeBall, CategoryBadge, DeleteButton } from "@/Components/ProductCard/style";
import { ImCross } from 'react-icons/im';
import { theme } from "@/styles/theme";
import * as Dialog from '@radix-ui/react-dialog';

export default function Categories({ errors: propsErrors, categories }) {
  const [color, setColor] = useState("#ffffff");
  const {
    control,
    handleSubmit,
    setError,
    reset,
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
    await Inertia.post('/categories', data);
    reset();
    setColor("#ffffff")
  }

  async function deleteCategory(id) {
    await Inertia.delete(`/categories/${id}`);
  }

  const crossColor = {
    color: theme.red,
    width: '.7rem',
  }
  const [container, setContainer] = React.useState(null);
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
                <CategoryBadge key={category.id} color={category.color} asButton>
                  <BadgeBall color={category.color} />
                  {category.name}
                  <DeleteButton onClick={() => deleteCategory(category.id)}>
                    <ImCross style={crossColor} />
                  </DeleteButton>
                </CategoryBadge>
              )
            })}
          </CategoryListingContainer>
        </CategoryLayout>
        <Dialog.Root>
          <Dialog.Trigger>trigger</Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>title</Dialog.Title>
              <Dialog.Description>description</Dialog.Description>
              <Dialog.Close>aaaaaaaaaaaaaaaaaaaaa</Dialog.Close>
              aaaaaaaaaaaaaaaaa
            </Dialog.Content>
            aaaaaaaaaaaaaaaa
          </Dialog.Portal>
        </Dialog.Root>
      </Layout>
    </>
  )
}
