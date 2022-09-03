import { Container } from "./styles";
import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useWatch } from "react-hook-form";
import { ButtonComponent } from "../Button";
import { InputControlled } from "../Input";
import { ProductCard } from "../ProductCard";

export function CategoryForm({ form, onSubmit, category, buttonName, closeModal }) {
  const { control, handleSubmit, reset, setValue } = form;
  const [color, setColor] = useState(category?.color ?? '#ffffff');
  const placeholderImage = "https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg"

  async function submitHandler(data) {
    setColor("#ffffff");
    data.color = color;
    await onSubmit(data, category?.id);
    closeModal();
    reset();
  }

  const colorSelectorStyle = {
    width: '18.625rem',
    height: '14.95rem',
  }

  const categoryName = useWatch({
    control,
    name: "name",
  });

  const [product, setProduct] = useState({
    name: "Produto Favorito",
    lowest_price: 3000,
    image_url: placeholderImage,
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
      name: "Produto Favorito",
      lowest_price: 3000,
      image_url: placeholderImage,
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
        <HexColorPicker style={colorSelectorStyle} color={color} onChange={setColor} />
        <form onSubmit={handleSubmit(submitHandler)}>
          <InputControlled control={control} label="Name" type="text" name="name" max='12' />
          <ButtonComponent name={buttonName} />
        </form>
      </Container>
    </>
  )
}