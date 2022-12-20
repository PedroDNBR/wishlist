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
import axios from "axios";
import { Inertia, RequestPayload } from "@inertiajs/inertia";
import { useFormErrors } from "@/Hooks/useFormErrors";
import { Category } from "@/Types/Category";
import { Product } from "@/Types/Product";

interface CreateProductProps {
  errors: Record<string, string>;
  categories: Category[];
}

export default function Products({ errors, categories }: CreateProductProps) {
  const {
    control,
    setError,
    reset,
    handleSubmit,
    setValue,
  } = useForm();

  useFormErrors({errors, setError: setError});

  async function sendProduct() {
    await Inertia.post('/product', product as unknown as RequestPayload);
    reset();
  }

  const placeholderImage = "https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg"

  const [productCategories, setProductCategories] = useState<Category[]>([]);
  const [productImage, setProductImage] = useState<string>(placeholderImage);

  const [product, setProduct] = useState<Product>({
    name: "Produto Favorito",
    lowest_price: 3000,
    image_url: productImage,
    categories: productCategories,
    url: '',
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
  }, [productPrice]);

  async function getImage() {
    if (!productUrl) return;
    try {
      const response = await axios.post('/api/image', { url: productUrl });
      setProductImage(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  function defineProduct() {
    const newProduct = {
      name: productName ? productName : "Produto Favorito",
      lowest_price: productPrice ? productPrice : 3000,
      url: productUrl,
      image_url: productImage,
      categories: productCategories
    };
    setProduct(newProduct);
  }

  useEffect(() => {
    defineProduct();
  }, [productName, productPrice, productCategories, productImage]);

  useEffect(() => {
    getImage();
  }, [productUrl]);


  function setCategory(category: Category) {
    if (productCategories.length > 3) return;
    if (productCategories.find((arrayCategory: Category) => arrayCategory.id === category.id)) return;
    setProductCategories([...productCategories, category]);
  }

  function deleteCategory(id?: number) {
    const newItems = productCategories.filter((category: Category) => category.id !== id);
    setProductCategories(newItems);
  }

  return (
    <>
      <Layout>
        <CategoryFormLayout>
          <ProductCard product={product} deletableCategory={true} onDelete={deleteCategory}>
            <DropdownMenu.Root>
              {productCategories.length < 4 && (
                <div>
                  <Trigger><GoPlus /></Trigger>
                </div>
              )}
              <Dropdown side="right" align="start">
                {(categories || []).filter(category => !productCategories.includes(category)).map((category: Category) => {
                  return (
                    <button key={category.id} onClick={() => setCategory(category)}>
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
            <form onSubmit={handleSubmit(sendProduct)}>
              <InputControlled control={control} label="Name" type="text" name="name" max={55} />
              <InputControlled control={control} label="URL" type="text" name="url" onPaste={getImage} />
              <InputControlled control={control} label="Lowest Price" type="text" max={18} name="lowest_price" />
              <ButtonComponent name="Create" />
            </form>
          </Container>
        </CategoryFormLayout>
      </Layout>
    </>
  )
}