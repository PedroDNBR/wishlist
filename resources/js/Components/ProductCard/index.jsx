import React from "react";
import { BadgeBall, Card, CategoryBadge, Image, ImageContainer, Info, Price, Title } from "./style";


export function ProductCard({ product }) {
  return (
    <Card>
      <ImageContainer>
        <Image src="https://img.terabyteshop.com.br/produto/g/placa-de-video-galax-geforce-rtx-3090-ex-gaming-white-1-click-oc-24gb-gddr6x-384bit_104312.png" />
      </ImageContainer>
      <Info>
        <Title><a href={product?.url} target="_blank">{product.name}</a></Title>
        <Price>R$ {product.price}</Price>
        {product?.categories?.map((category) => {
          return (
            <CategoryBadge color={category.color}>
              <BadgeBall color={category.color} />
              {category.name}
            </CategoryBadge>
          )
        })}
      </Info>
    </Card>
  )
}
