import React from "react";
import { BadgeBall, Card, CategoryBadge, Image, ImageContainer, Info, Price, Title } from "./style";


export default function ProductCard({ product }) {
  return (
    <Card>
      <ImageContainer>
        <Image src="https://img.terabyteshop.com.br/produto/g/placa-de-video-galax-geforce-rtx-3090-ex-gaming-white-1-click-oc-24gb-gddr6x-384bit_104312.png" />
      </ImageContainer>
      <Info>
        <Title>{product.name}</Title>
        <Price>R$ {product.price}</Price>
        <CategoryBadge color={product.category.color}>
          <BadgeBall color={product.category.color} />
          {product.category.name}
        </CategoryBadge>
      </Info>
    </Card>
  )
}
