import React, { useEffect } from "react";
import { Head, router } from '@inertiajs/react';
import { FluidContainer, Form, ImgAuth } from "@/styles/global";
import { AuthTitleComponent } from "@/Components/AuthTitle";
import { AuthAccountSpan } from "@/Components/AuthAccountSpan";
import { InputControlled } from "@/Components/Input";
import { ButtonComponent } from "@/Components/Button";
import { useForm } from "react-hook-form";
import { useFormErrors } from "@/Hooks/useFormErrors";
import { useTranslation } from "react-i18next";
import '@/i18n';
import { Checkbox } from "@/Components/Checkbox/style";
import { PasswordInputControlled } from "@/Components/PasswordInput";

interface LoginProps {
  errors: Record<string, string>;
}

export default function Login({ errors: apiErrors }: LoginProps) {
  const {
    control,
    handleSubmit,
    setError,
    register
  } = useForm();

  const { t } = useTranslation();

  useFormErrors({errors: apiErrors, setError: setError});

  function login(data: any) {
    router.post('/users/login', data, {
      headers: {
        'Content-Language': localStorage.getItem('i18nextLng') ?? 'en',
      },
    });
  }
  return (
    <>
      <FluidContainer>
        <Head title="Login"/>
        <div>
          <AuthTitleComponent>{t('titles:login-your-account')}</AuthTitleComponent>
          <AuthAccountSpan content={t("titles:doesnt-have-an-account")} link="/register" linkTitle={t('inputs:register')} />
          <Form onSubmit={handleSubmit(login)}>
            <InputControlled control={control} label={t('inputs:email')} type="text" name="email" />
            <PasswordInputControlled control={control} label={t('inputs:password')} name="password" />
            <Checkbox>
              <label className="b-contain">
                <span>{t('inputs:remember-me')}</span>
                <input type="checkbox" id="remember" {...register('remember')} />
                <div className="b-input"></div>
              </label>
            </Checkbox>
            <ButtonComponent name={t('inputs:login')} />
          </Form>
        </div>
        <ImgAuth src="/assets/imgs/newpicture.svg" alt="" />
      </FluidContainer>
    </>
  );
}
