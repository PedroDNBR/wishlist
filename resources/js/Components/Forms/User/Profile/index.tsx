import { ButtonComponent } from "@/Components/Button";
import { InputControlled } from "@/Components/Input";
import { User } from "@/Types/User";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { OpenImageModal } from "@/Components/OpenImageModal";
import { FormLayout, Container } from "@/Components/CategoryForm/styles";
import axios from "axios";
import { router } from "@inertiajs/react";
import { useFormErrors } from "@/Hooks/useFormErrors";
import { BigProfileImageContainer, ProfileImage } from "@/Components/Menus/style";
import { PasswordInputControlled } from "@/Components/PasswordInput";

interface ProfileFormProps {
  user: User;
  errors: Record<string, string> | undefined | null;
}

export function ProfileForm({ user, errors }: ProfileFormProps) { 
  const {
    control,
    setError,
    setValue,
    handleSubmit
  } = useForm();

  const { t } = useTranslation();

  const [profileImage, setProfileImage] = useState<string>(user.profile_picture);
  const [profileImageFile, setProfileImageFile] = useState<File | undefined>(undefined);

  const { handleErrors } = useFormErrors({errors, setError, enabled: false});
  
  useEffect(() => {
    if (!errors) return;

    handleErrors();
  }, [errors])

  useEffect(() => {
    setValue('name', user.name);
    setValue('email', user.email);
    setValue('username', user.username);
  }, [user])

  function setProfileImageAndImageFile(preview: string, file?: File) {
    setProfileImageFile(file);
    setProfileImage(preview);
  }
  
  type updateProfileProps = {
    name: string;
    username: string;
    email: string;
    password: string;
    password_confirmation: string;
  }

  async function updateProfile({ username, name, email, password, password_confirmation }: updateProfileProps) {
    const profile = {
      name: name,
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      profile_picture: profileImage,
    };
    let response;
    if(profileImageFile) {
      const formData = new FormData();
      formData.append("file", profileImageFile);
      response = await axios.post('/api/store-image', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
      setProfileImage(response.data.location)
        await router.put('/profile', {...profile, profile_picture: response?.data.location } as any);
    } else {
        await router.put('/profile', profile as any);
    }
    // reset();
  }

  return (
    <FormLayout>
      <Container>
        <BigProfileImageContainer>
          <ProfileImage src={profileImage} />
          <OpenImageModal setImageAndImageFile={setProfileImageAndImageFile} />
        </BigProfileImageContainer>
      </Container>
      <Container>
        <form onSubmit={handleSubmit(updateProfile)}>
          <InputControlled control={control} label={t('inputs:name')} type="text" name="name" />
          <InputControlled control={control} label={t('inputs:username')} type="text" name="username" />
          <InputControlled control={control} label={t('inputs:email')} type="email" name="email" />
          <PasswordInputControlled control={control} label={t('inputs:password')} name="password" />
          <InputControlled control={control} label={t('inputs:confirm-password')} type="password" name="password_confirmation" />
          <ButtonComponent name={t('inputs:update')} />
        </form>
      </Container>
    </FormLayout>
  )
}