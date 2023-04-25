import { User } from "@/Types/User";
import { useTranslation } from "react-i18next";
import { BigProfileImageContainer } from "../Menus/style";
import { PublicProfileHeaderContainer, PublicProfileHeaderItem } from "../PublicProfileHeader/style";
import { MdIosShareInline, SharePublicProfileContainer, SharePublicProfileHeaderTitle } from "./style";
import Swal from "sweetalert2";


interface PublicProfileHeaderProps {
  user: User;
  url: string;
}

export function SharePublicProfile({user, url}: PublicProfileHeaderProps) {
  const { t } = useTranslation();

  function shareProfile()
  {
    console.log(url+'/'+user.username);
    navigator.clipboard.writeText(url+'/'+user.username)
    const title: string = t('titles:url-copied');
    Swal.fire({
      title: title,
      icon: 'success',
      showConfirmButton: false,
      timer: 1200
    });
  }
  return (
    <SharePublicProfileContainer>
      <PublicProfileHeaderContainer>
        <BigProfileImageContainer>
          <img src={user.profile_picture} alt={t('labels:profile') + user.name} width="800" />
        </BigProfileImageContainer>
        <div>
          <SharePublicProfileHeaderTitle onClick={() => shareProfile()}>{t('titles:share-your-wishlist')}<MdIosShareInline/></SharePublicProfileHeaderTitle>
          <PublicProfileHeaderItem>{t('titles:show-and-share-text')}</PublicProfileHeaderItem>
        </div>
      </PublicProfileHeaderContainer>
    </SharePublicProfileContainer>
  )
}