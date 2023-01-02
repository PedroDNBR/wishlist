import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputControlled } from "@/Components/Input";
import { FluidContainer, Form, ImgAuth } from "@/styles/global";
import { ButtonComponent } from "@/Components/Button";
import { AuthTitleComponent } from "@/Components/AuthTitle";
import { AuthAccountSpan } from "@/Components/AuthAccountSpan";
import { Inertia, RequestPayload } from "@inertiajs/inertia";
import { useFormErrors } from "@/Hooks/useFormErrors";
import { useTranslation } from "react-i18next";
import '@/i18n';

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

	async function register(data: RequestPayload) {
		await Inertia.post('/users/register', data, {
      headers: {
        'Content-Language': localStorage.getItem('i18nextLng') ?? 'en',
      },
    });
	}

	return (
		<FluidContainer>
			<div>
				<AuthTitleComponent>{t('Create new account')}</AuthTitleComponent>
				<AuthAccountSpan content={t('Already A Member?')} link="/login" linkTitle={t('Log in')} />
				<Form onSubmit={handleSubmit(register)}>
					<InputControlled control={control} label={t('Full name')} type="text" name="name" />
					<InputControlled control={control} label={t('Email')} type="text" name="email" />
					<InputControlled control={control} label={t('Password')} type="password" name="password" />
					<InputControlled control={control} label={t('Confirm password')} type="password" name="password_confirmation" />
					<ButtonComponent name={t('Create Account')} />
				</Form>
			</div>
			<ImgAuth src="/assets/imgs/newpicture.svg" alt="" />
		</FluidContainer>
	);
}
