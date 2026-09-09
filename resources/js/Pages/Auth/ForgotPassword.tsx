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
import { PublicProfileHeaderItem } from "@/Components/PublicProfileHeader/style";

interface ForgotPasswordProps {
  errors: Record<string, string>;
  status?: string;
}

export default function ForgotPassword({ errors: apiErrors, status }: ForgotPasswordProps) {
  const {
    control,
    handleSubmit,
    setError,
  } = useForm();

  const { t } = useTranslation();

  useFormErrors({ errors: apiErrors, setError: setError });

  function sendLink(data: any) {
    router.post('/forgot-password', data, {
      headers: {
        'Content-Language': localStorage.getItem('i18nextLng') ?? 'en',
      },
    });
  }

  return (
    <>
      <FluidContainer>
        <Head title={t('titles:forgot-password-title') ?? 'Forgot password'} />
        <div>
          <AuthTitleComponent>{t('titles:forgot-password-title')}</AuthTitleComponent>
          <AuthAccountSpan content={t('titles:remembered-password')} link="/login" linkTitle={t('inputs:back-to-login')} />
          <PublicProfileHeaderItem style={{fontWeight: 800, fontSize: "1rem"}}>{t('titles:forgot-password-text')}</PublicProfileHeaderItem>
          {status && <PublicProfileHeaderItem>{status}</PublicProfileHeaderItem>}
          <Form onSubmit={handleSubmit(sendLink)}>
            <InputControlled control={control} label={t('inputs:email')} type="email" name="email" />
            <ButtonComponent name={t('inputs:send-reset-link')} />
          </Form>
        </div>
        <ImgAuth src="/assets/imgs/newpicture.svg" alt="" />
      </FluidContainer>
    </>
  );
}
