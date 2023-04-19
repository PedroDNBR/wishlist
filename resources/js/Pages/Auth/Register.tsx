import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputControlled } from "@/Components/Input";
import { FluidContainer, Form, ImgAuth } from "@/styles/global";
import { ButtonComponent } from "@/Components/Button";
import { AuthTitleComponent } from "@/Components/AuthTitle";
import { AuthAccountSpan } from "@/Components/AuthAccountSpan";
import { Head, router } from '@inertiajs/react';
import { useFormErrors } from "@/Hooks/useFormErrors";
import { useTranslation } from "react-i18next";
import '@/i18n';
import { PasswordInputControlled } from "@/Components/PasswordInput";

interface RegisterProps {
  errors: Record<string, string>;
}

export default function Register({ errors: apiErrors }: RegisterProps) {
	const {
		control,
		handleSubmit,
		setError,
	} = useForm();

  const { t } = useTranslation();

	useFormErrors({errors: apiErrors, setError: setError});

	async function register(data: any) {
		await router.post('/users/register', data, {
      headers: {
        'Content-Language': localStorage.getItem('i18nextLng') ?? 'en',
      },
    });
	}

	return (
		<FluidContainer>
			<Head title="Register"/>
			<div>
				<AuthTitleComponent>{t('titles:create-new-account')}</AuthTitleComponent>
				<AuthAccountSpan content={t('titles:already-a-member')} link="/login" linkTitle={t('inputs:login')} />
				<Form onSubmit={handleSubmit(register)}>
					<InputControlled control={control} label={t('inputs:full-name')} type="text" name="name" />
					<InputControlled control={control} label={t('inputs:username')} type="text" name="username" />
					<InputControlled control={control} label={t('inputs:email')} type="text" name="email" />
					<PasswordInputControlled control={control} label={t('inputs:password')} name="password" />
					<InputControlled control={control} label={t('inputs:confirm-password')} type="password" name="password_confirmation" />
					<ButtonComponent name={t('inputs:create-account')} />
				</Form>
			</div>
			<ImgAuth src="/assets/imgs/newpicture.svg" alt="" />
		</FluidContainer>
	);
}
