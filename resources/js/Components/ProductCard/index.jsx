import React from "react";
import { Category } from "../CategoryBadge";
import { Card, CategoryWrapper, Image, ImageContainer, Info, Price, Title } from "./style";

export function ProductCard({ children = null, product, deletableCategory = false, onDelete = null }) {
  return (
    <Card>
      <ImageContainer>
        <Image src="https://img.terabyteshop.com.br/produto/g/placa-de-video-galax-geforce-rtx-3090-ex-gaming-white-1-click-oc-24gb-gddr6x-384bit_104312.png" />
      </ImageContainer>
      <Info>
        <Title><a href={product?.url} target="_blank">{product.name}</a></Title>
        <Price>R$ {product.price}</Price>
        <CategoryWrapper>
          {product?.categories?.map((category) => (
            <Category category={category} canDelete={deletableCategory} key={category.id ? category.id : "1"} onDelete={onDelete} />
          ))}
          {children}
        </CategoryWrapper>
      </Info>
    </Card>
  )
}
