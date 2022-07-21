import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputControlled } from "@/Components/Input";
import { FluidContainer, Form, ImgAuth } from "@/styles/global";
import { ButtonComponent } from "@/Components/Button";
import { AuthTitleComponent } from "@/Components/AuthTitle";
import AuthAccountSpan from "@/Components/AuthAccountSpan";
import { Inertia } from "@inertiajs/inertia";

export default function Register({ errors: propsErrors }) {
	const {
		control,
		handleSubmit,
		setError,
		formState: { isSubmitting, errors },
	} = useForm();

	function register(data) {
		Inertia.post('/users/register', data)
	}

	return (
		<FluidContainer>
			<div>
				<AuthTitleComponent>Create new account</AuthTitleComponent>
				<AuthAccountSpan content="Already A Member? " link="/login" linkTitle="Log In" />
				<Form onSubmit={handleSubmit(register)}>
					<InputControlled control={control} error={errors?.name} label="Full Name" type="text" name="name" />
					<InputControlled control={control} error={errors?.email} label="Email" type="text" name="email" />
					<InputControlled control={control} error={errors?.password} label="Password" type="password" name="password" />
					<InputControlled control={control} error={errors?.password_confirmation} label="Confirm Password" type="password" name="password_confirmation" />
					<ButtonComponent name="Create Account" isLoading={isSubmitting} />
				</Form>
			</div>
			<ImgAuth src="/assets/imgs/newpicture.svg" alt="" />
		</FluidContainer>
	);
}
