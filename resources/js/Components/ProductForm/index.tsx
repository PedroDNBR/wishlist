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
import { router } from '@inertiajs/react';
import { useFormErrors } from "@/Hooks/useFormErrors";
import { Category } from "@/Types/Category";
import { Product } from "@/Types/Product";
import { Select } from "@/Components/Select/style";
import { colorStyles } from "@/Components/HomeSearchBar/style";
import { useTranslation } from "react-i18next";
import * as Dialog from '@radix-ui/react-dialog';


interface CreateProductProps {
  errors: Record<string, string> | undefined | null;
  categories: Category[];
  editProduct?: Product;
}

export default function ProductForm({ errors, categories, editProduct }: CreateProductProps) {
  const {
    control,
    setError,
    reset,
    handleSubmit,
    setValue,
  } = useForm();

  const { t } = useTranslation();

  const { handleErrors } = useFormErrors({errors, setError, enabled: false});
  
  useEffect(() => {
    if (!errors) return;

    handleErrors();
  }, [errors])

  const placeholderImage = "https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg"

  const [productCategories, setProductCategories] = useState<Category[]>([]);
  const [productImage, setProductImage] = useState<string>(placeholderImage);
  const [productImageFile, setProductImageFile] = useState<File | undefined>(undefined);

  const defaultProduct = {
    name: t('labels:favorite-product'),
    lowest_price: 3000,
    image_url: productImage,
    categories: productCategories,
    url: '',
  };
  
  const [product, setProduct] = useState<Product>(editProduct ? editProduct : defaultProduct);

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
    if(!editProduct) return;
    setValue('name', editProduct.name);
    setValue('lowest_price', editProduct.lowest_price);
    formatPrice(editProduct.lowest_price.toString());
    setValue('url', editProduct.url);
    setProductImage(editProduct.image_url)

    editProduct.categories.forEach((category) => {
      if(category.id) setCategoriesId(category.id);
    })
  }, [editProduct])

  useEffect(() => {
    if (!productPrice) return;
    formatPrice(productPrice);
  }, [productPrice]);

  function formatPrice(productPrice: string)  {
    let price = productPrice ?? '';
    price = price.replace(/\D/g, "");
    price = price.replace(/(\d)(\d{2})$/, "$1.$2");
    price = price.replace(/(?=(\d{3})+(\D))\B/g, ",");
    setValue('lowest_price', price);
  }

  async function getImage() {
    if (!productUrl) return;
    try {
      const response = await axios.post('/api/image', { url: productUrl });
      if(response.data)
        setProductImage(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  function defineProduct() {
    const newProduct = {
      name: productName ? productName : t('labels:favorite-product'),
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

  function setCategoriesId(id: number) {
    setOpen(false);
    if (productCategories.length > 3) return;
    const foundCategory: Category|undefined = categories.find((arrayCategory: Category) => arrayCategory.id === id)
    if(foundCategory)
        setProductCategories((prevItems) => [...prevItems, foundCategory]);
  
  }

  function deleteCategory(id?: number) {
    const newItems = productCategories.filter((category: Category) => category.id !== id);
    setProductCategories(newItems);
  }

  const categoriesSelect = () => {
    return categories.filter(category => !productCategories.includes(category)).map((category: Category) => {
      return {
        value: category.id,
        label: category.name,
        color: category.color,
      };
    });
  }

  function setProductImageAndImageFile(preview: string, file?: File) {
    setProductImageFile(file);
    setProductImage(preview);
  }

  async function sendProduct() {
    let response;
    if(productImageFile) {
      const formData = new FormData();
      formData.append("file", productImageFile);
      response = await axios.post('/api/store-image', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
      setProductImage(response.data.location)
      if(!editProduct)
        await router.post('/product', {...product, image_url: response?.data.location } as any);
      else
        await router.put(`/product/${editProduct.id}`, {...product, image_url: response?.data.location } as any, {preserveState: true, preserveScroll: true});

    } else {
      if(!editProduct)
        await router.post('/product', product as any);
      else
      await router.put(`/product/${editProduct.id}`, product as any, {preserveState: true, preserveScroll: true});
    }
    reset();
  }

  const [open, setOpen] = useState(false);
  return (
    <>
      <CategoryFormLayout>
        <ProductCard product={product} deletableCategory={true} onDelete={deleteCategory} isEditingImage={true} setProductImageAndImageFile={setProductImageAndImageFile}>
          {productCategories.length < 4 && (
          <DropdownMenu.Root open={open} onOpenChange={setOpen} modal={true}>
              <div>
                <Trigger><GoPlus /></Trigger>
              </div>
            <Dropdown side="right" align="start">
            <Select
              classNamePrefix="react-select" 
              options={categoriesSelect()} 
              placeholder={t('inputs:select-categories')}
              onChange={(choice: any) => setCategoriesId(choice.value)}
              styles={colorStyles}
            />
            </Dropdown>
          </DropdownMenu.Root>
          )}
        </ProductCard>
        <Container>
          <form onSubmit={handleSubmit(sendProduct)}>
            <InputControlled control={control} label={t('inputs:name')} type="text" name="name" max={55} />
            <InputControlled control={control} label={t('inputs:url')} type="text" name="url" onPaste={getImage} />
            <InputControlled control={control} label={t('inputs:lowest-price')} type="text" max={10} name="lowest_price" />
            {editProduct ?
              <ButtonComponent name={t('inputs:update')} />
            :
             <ButtonComponent name={t('inputs:create')} />
            }
          </form>
        </Container>
      </CategoryFormLayout>
    </>
  )
}