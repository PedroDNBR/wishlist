import { Container, HexColorPickerComponent } from "./styles";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, UseFormReturn, useWatch } from "react-hook-form";
import { ButtonComponent } from "../Button";
import { InputControlled } from "../Input";
import { ProductCard } from "../ProductCard";
import { Category } from "@/Types/Category";
import { router } from '@inertiajs/react';
import { Product } from "@/Types/Product";
import { useTranslation } from "react-i18next";

interface CategoryFormProps {
  form: UseFormReturn<FieldValues, object>;
  category?: Category;
  buttonName: string;
  closeModal?: () => void;
  onSubmit: (data: Category, id: number | undefined) => Promise<void>;
}

export function CategoryForm({ form, onSubmit, category, buttonName, closeModal }: CategoryFormProps) {
  const { control, handleSubmit, reset, setValue } = form;
  const { t } = useTranslation();
  const [color, setColor] = useState(category?.color ?? '#ffffff');
  const placeholderImage = "https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg"

  async function submitHandler(data: Category) {
    setColor("#ffffff");
    data.color = color;
    await onSubmit(data, category?.id);
    if (closeModal) closeModal();
    reset();
  }
  
  const categoryName = useWatch({
    control,
    name: "name",
  });

  const [product, setProduct] = useState<Product>({
    name: t('labels:favorite-product'),
    lowest_price: 3000,
    image_url: placeholderImage,
    url: '',
    categories: [
      {
        name: categoryName,
        color: color,
      }
    ]
  });

  useEffect(() => {
    setValue('name', category?.name ?? '');
  }, [category?.name])

  useEffect(() => {
    setProduct({
      name: t('labels:favorite-product'),
      lowest_price: 3000,
      image_url: placeholderImage,
      url: '',
      categories: [
        {
          name: categoryName,
          color: color,
        }
      ]
    });
  }, [categoryName, color])

  return (
    <>
      <ProductCard product={product} />
      <Container>
        <HexColorPickerComponent color={color} onChange={setColor} />
        <form onSubmit={handleSubmit(submitHandler as SubmitHandler<FieldValues>)}>
          <InputControlled control={control} label={t('inputs:name')} type="text" name="name" max={12} />
          <ButtonComponent name={buttonName} />
        </form>
      </Container>
    </>
  )
}