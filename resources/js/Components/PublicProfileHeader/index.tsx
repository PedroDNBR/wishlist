import { User } from "@/Types/User";
import { useTranslation } from "react-i18next";
import { BigProfileImageContainer } from "../Menus/style";
import { PublicProfileHeaderContainer, PublicProfileHeaderItem, PublicProfileHeaderTitle } from "./style";
import { Product } from "@/Types/Product";
import { Category } from "@/Types/Category";


interface PublicProfileHeaderProps {
  user: User;
  products: Product[];
  categories: Category[];
}

export function PublicProfileHeader({user, products, categories}: PublicProfileHeaderProps) {
  const { t } = useTranslation();
  return (
    <>
      <PublicProfileHeaderContainer>
        <BigProfileImageContainer>
          <img src={user.profile_picture} alt={t('labels:profile') + user.name} width="800" />
        </BigProfileImageContainer>
        <div>
          <PublicProfileHeaderTitle>{t('titles:wishlist-from', {name: user.name})}</PublicProfileHeaderTitle>
          <PublicProfileHeaderItem>{t('titles:user-since')} {user.created_at}</PublicProfileHeaderItem>
          <PublicProfileHeaderItem>{t('titles:total-products')} {products.length}</PublicProfileHeaderItem>
          <PublicProfileHeaderItem>{t('titles:total-categories')} {categories.length}</PublicProfileHeaderItem>
        </div>
      </PublicProfileHeaderContainer>
    </>
  )
}