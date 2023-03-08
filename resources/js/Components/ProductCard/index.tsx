import * as Dialog from '@radix-ui/react-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Product } from "@/Types/Product";
import { ReactNode } from "react";
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { Category } from "../CategoryBadge";
import { OpenImageModal } from "../OpenImageModal";
import { Card, CategoryWrapper, Image, ImageContainer, Info, Price, Title, EditMenu } from "./style";
import { useTranslation } from "react-i18next";
import { DeleteButton, EditButton, ProductDropdownContent } from '../ProductDropdown/style';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { router } from '@inertiajs/react';
import Swal from 'sweetalert2';

interface ProductCardProps {
  children?: ReactNode;
  product: Product;
  onDelete?: ((id: number | undefined) => void) | null;
  isEditingImage?: boolean;
  setProductImageAndImageFile?: ((preview: string ,file?: File) => void) | null;
  canEditingProduct?: boolean;
}

export function ProductCard({
  children = null, 
  product, 
  onDelete = null, 
  isEditingImage = false, 
  setProductImageAndImageFile, 
  canEditingProduct = false, 
}: ProductCardProps) {
  const { t } = useTranslation();

  function deleteProduct() {
    Swal.fire({
      title: 'Deseja apagar este produto?',
      text: "Você não poderá reverter esta opção!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        router.delete(`/products/${product.id}`, {
          preserveState: true,
          preserveScroll: true,
        });
        Swal.fire(
          'Concluido!',
          'Seu produto foi deletado com sucesso.',
          'success'
        )
      }
    })

  }

  return (
    <Card>
      <ImageContainer>
        <Image src={product.image_url} />
        { isEditingImage && setProductImageAndImageFile ? <OpenImageModal setProductImageAndImageFile={setProductImageAndImageFile} /> : ''}
      </ImageContainer>
      {canEditingProduct && (
        <DropdownMenu.Root modal={false}>
          <EditMenu>
            <DropdownMenu.Trigger>
              <BiDotsVerticalRounded />
            </DropdownMenu.Trigger>
          </EditMenu>

        <DropdownMenu.Portal>
          <ProductDropdownContent side="left" align="start">
            <EditButton href={ `/update-product/${product.id}` }>
              <FaPencilAlt /> {t('inputs:edit')}
            </EditButton>
            <DeleteButton onClick={() => deleteProduct()}>
              <FaTrash /> {t('inputs:delete')}
            </DeleteButton>
          </ProductDropdownContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
      )}
      <Info>
        <Title><a href={product?.url} target="_blank">{product.name}</a></Title>
        <Price>{t('labels:lowest-price')}: R$ {product.lowest_price}</Price>
        <CategoryWrapper>
          {product?.categories?.map((category) => (
              <Category category={category} key={category.id ? category.id : "1"} onDelete={onDelete} />
          ))}
          {children}
        </CategoryWrapper>
      </Info>
    </Card>
  )
}
