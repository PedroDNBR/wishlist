import React, { useEffect } from "react";
import { Inertia, RequestPayload } from "@inertiajs/inertia";
import { FluidContainer, Form, ImgAuth } from "@/styles/global";
import { AuthTitleComponent } from "@/Components/AuthTitle";
import { AuthAccountSpan } from "@/Components/AuthAccountSpan";
import { InputControlled } from "@/Components/Input";
import { ButtonComponent } from "@/Components/Button";
import { useForm } from "react-hook-form";
import { useFormErrors } from "@/Hooks/useFormErrors";
import { useTranslation } from "react-i18next";
import '@/i18n';

interface LoginProps {
  errors: Record<string, string>;
}

export default function Login({ errors: apiErrors }: LoginProps) {
  const {
    control,
    handleSubmit,
    setError,
  } = useForm();

  const { t } = useTranslation();

  useFormErrors({errors: apiErrors, setError: setError});

  function login(data: RequestPayload) {
    Inertia.post('/users/login', data, {
      headers: {
        'Content-Language': localStorage.getItem('i18nextLng') ?? 'en',
      },
    });
  }
  return (
    <>
      <FluidContainer>
        <div>
          <AuthTitleComponent>{t('Login in your account')}</AuthTitleComponent>
          <AuthAccountSpan content={t("Doesn't have an account?")} link="/register" linkTitle={t('Register')} />
          <Form onSubmit={handleSubmit(login)}>
            <InputControlled control={control} label={t('Email')} type="text" name="email" />
            <InputControlled control={control} label={t('Password')} type="password" name="password" />
            <ButtonComponent name={t('Log in')} />
          </Form>
        </div>
        <ImgAuth src="/assets/imgs/newpicture.svg" alt="" />
      </FluidContainer>
    </>
  );
}
