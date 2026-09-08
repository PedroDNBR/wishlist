import * as Dialog from '@radix-ui/react-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Product } from "@/Types/Product";
import { MouseEvent, ReactNode, useState } from "react";
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { Category } from "../CategoryBadge";
import { Card, CategoryWrapper, Image, ImageContainer, Info, Price, Title, EditMenu, ModalProductDescription } from "./style";
import { useTranslation } from "react-i18next";
import { DeleteButton, EditButton, ProductDropdownContent } from '../ProductDropdown/style';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { router } from '@inertiajs/react';
import Swal from 'sweetalert2';
import { Overlay, Content } from '@/Components/Modal/styles';
import { CloseModal } from '../OpenImageModal/styles';
import { AiOutlineClose } from 'react-icons/ai';
import { Container as DivContainer } from "@/Components/CategoryForm/styles";
import { Modal } from '../Modal';

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card onClick={(e:any) => {setIsModalOpen(true)}} style={{cursor: 'pointer'}}>
      <ImageContainer>
        <Image src={product.image_url} />
      </ImageContainer>
      {canEditingProduct && (
        <DropdownMenu.Root modal={false}>
          <EditMenu>
            <DropdownMenu.Trigger onClick={(e: any) => {e.stopPropagation()}}>
              <BiDotsVerticalRounded />
            </DropdownMenu.Trigger>
          </EditMenu>

        <DropdownMenu.Portal>
          <ProductDropdownContent side="left" align="start" onClick={(e: any) => {e.stopPropagation()}}>
            <EditButton onClick={(e: MouseEvent) => {e.stopPropagation()}} href={ `/update-product/${product.id}` }>
              <FaPencilAlt /> {t('inputs:edit')}
            </EditButton>
            <DeleteButton onClick={(e: MouseEvent) => {e.stopPropagation(); deleteProduct();}}>
              <FaTrash /> {t('inputs:delete')}
            </DeleteButton>
          </ProductDropdownContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
      )}
      <Info>
        <Title><a onClick={(e: any) => {e.stopPropagation()}} href={product?.url} target="_blank" title={product.name}>{product.name}</a></Title>
        <Price style={{cursor: 'text'}} onClick={(e: any) => {e.stopPropagation()}}>{t('labels:lowest-price')}: R$ {product.lowest_price}</Price>
        <CategoryWrapper>
          {product?.categories?.map((category) => (
              <Category category={category} key={category.id ? category.id : "1"} onDelete={onDelete} />
          ))}
          {children}
        </CategoryWrapper>
      </Info>
      <Dialog.Root open={isModalOpen}>
        <Overlay>
          <Content onPointerDownOutside={() => setIsModalOpen(false)}>
            <CloseModal onClick={(e: MouseEvent) => { setIsModalOpen(false); e.stopPropagation();}}>
                <AiOutlineClose />
              </CloseModal>
            <Dialog.Portal>
            </Dialog.Portal>
          </Content>
        </Overlay>

        <Modal closeModal={() => setIsModalOpen(false)}>
            <CloseModal onClick={(e: MouseEvent) => { setIsModalOpen(false); e.stopPropagation();}}>
              <AiOutlineClose />
            </CloseModal>
            <DivContainer onClick={(e: any) => {e.stopPropagation()}}>
              <ImageContainer style={{width: '100%'}}>
                <Image src={product.image_url} />
              </ImageContainer>    
            </DivContainer>
            <DivContainer style={{justifyContent: 'flex-start', alignItems: 'start'}} onClick={(e: MouseEvent) => { setIsModalOpen(false); e.stopPropagation();}}>
              <Info onClick={(e: any) => {e.stopPropagation()}} style={{width: '100%'}}>
                <Title style={{fontSize: '1.8rem', textOverflow: 'unset', whiteSpace: 'normal'}}><a onClick={(e: any) => {e.stopPropagation()}} href={product?.url} target="_blank" title={product.name}>{product.name}</a></Title>
                <Price style={{cursor: 'text', fontSize: '1.3rem', paddingBottom: '.5rem'}} onClick={(e: any) => {e.stopPropagation()}}>{t('labels:lowest-price')}: R$ {product.lowest_price}</Price>
                <CategoryWrapper style={{paddingBottom: '1.6rem'}}>
                  {product?.categories?.map((category) => (
                      <Category category={category} key={category.id ? category.id : "1"} onDelete={onDelete} />
                  ))}
                  {children}
                </CategoryWrapper>
                <ModalProductDescription dangerouslySetInnerHTML={{__html: product.description ?? ''}}>
                </ModalProductDescription>
              </Info>
            </DivContainer>
          </Modal>
      </Dialog.Root>
    </Card>
  )
}
