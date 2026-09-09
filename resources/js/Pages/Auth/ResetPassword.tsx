import { useEffect } from "react";
import { Head, router } from '@inertiajs/react';
import { FluidContainer, Form, ImgAuth } from "@/styles/global";
import { AuthTitleComponent } from "@/Components/AuthTitle";
import { AuthAccountSpan } from "@/Components/AuthAccountSpan";
import { InputControlled } from "@/Components/Input";
import { PasswordInputControlled } from "@/Components/PasswordInput";
import { ButtonComponent } from "@/Components/Button";
import { useForm } from "react-hook-form";
import { useFormErrors } from "@/Hooks/useFormErrors";
import { useTranslation } from "react-i18next";
import '@/i18n';

interface ResetPasswordProps {
  errors: Record<string, string>;
  email: string;
  token: string;
}

export default function ResetPassword({ errors: apiErrors, email, token }: ResetPasswordProps) {
  const {
    control,
    handleSubmit,
    setError,
    setValue,
  } = useForm();

  const { t } = useTranslation();

  useFormErrors({ errors: apiErrors, setError: setError });

  useEffect(() => {
    setValue('email', email);
  }, [email]);

  function resetPassword(data: any) {
    router.post('/reset-password', { ...data, token }, {
      headers: {
        'Content-Language': localStorage.getItem('i18nextLng') ?? 'en',
      },
    });
  }

  return (
    <>
      <FluidContainer>
        <Head title={t('titles:reset-password-title') ?? 'Reset password'} />
        <div>
          <AuthTitleComponent>{t('titles:reset-password-title')}</AuthTitleComponent>
          <AuthAccountSpan content={t('titles:remembered-password')} link="/login" linkTitle={t('inputs:back-to-login')} />
          <Form onSubmit={handleSubmit(resetPassword)}>
            <InputControlled control={control} label={t('inputs:email')} type="email" name="email" />
            <PasswordInputControlled control={control} label={t('inputs:new-password')} name="password" />
            <InputControlled control={control} label={t('inputs:confirm-password')} type="password" name="password_confirmation" />
            <ButtonComponent name={t('inputs:reset-password')} />
          </Form>
        </div>
        <ImgAuth src="/assets/imgs/newpicture.svg" alt="" />
      </FluidContainer>
    </>
  );
}
