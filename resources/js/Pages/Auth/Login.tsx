import React, { useEffect } from "react";
import { Inertia, RequestPayload } from "@inertiajs/inertia";
import { FluidContainer, Form, ImgAuth } from "@/styles/global";
import { AuthTitleComponent } from "@/Components/AuthTitle";
import { AuthAccountSpan } from "@/Components/AuthAccountSpan";
import { InputControlled } from "@/Components/Input";
import { ButtonComponent } from "@/Components/Button";
import { useForm } from "react-hook-form";
import { useFormErrors } from "@/Hooks/useFormErrors";

interface LoginProps {
  errors: Record<string, string>;
}

export default function Login({ errors: apiErrors }: LoginProps) {
  const {
    control,
    handleSubmit,
    setError,
  } = useForm();

  useFormErrors({errors: apiErrors, setError: setError});

  function login(data: RequestPayload) {
    Inertia.post('/users/login', data)
  }
  return (
    <>
      <FluidContainer>
        <div>
          <AuthTitleComponent>Login in your account</AuthTitleComponent>
          <AuthAccountSpan content="Doesn't have an account? " link="/register" linkTitle="Register" />
          <Form onSubmit={handleSubmit(login)}>
            <InputControlled control={control} label="Email" type="text" name="email" />
            <InputControlled control={control} label="Password" type="password" name="password" />
            <ButtonComponent name="Log in" />
          </Form>
        </div>
        <ImgAuth src="/assets/imgs/newpicture.svg" alt="" />
      </FluidContainer>
    </>
  );
}
