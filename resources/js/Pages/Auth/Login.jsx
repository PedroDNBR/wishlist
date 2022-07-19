import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { FluidContainer, Form, ImgAuth } from "@/styles/global";
import { AuthTitleComponent } from "@/Components/AuthTitle";
import AuthAccountSpan from "@/Components/AuthAccountSpan";
import { InputControlled } from "@/Components/Input";
import { ButtonComponent } from "@/Components/Button";
import { useForm } from "react-hook-form";

export default function Login(user) {
    console.log(user);
    const {
        control,
        handleSubmit,
        setError,
        formState: { isSubmitting },
    } = useForm();


    function login(data) {
        Inertia.post('/users/login', data)
    }
    return (
    <>
        <FluidContainer>
            <div>
                <AuthTitleComponent>Login in your account</AuthTitleComponent>
                <AuthAccountSpan content="Doesn't have an account? " link="/register" linkTitle="Register"/>
                <Form onSubmit={handleSubmit(login)}>
                    {user?.user !== null ? (
                        <InputControlled value={user.user.email} control={control} label="Email" type="text" name="email"/>
                        ) : (
                        <InputControlled control={control} label="Email" type="text" name="email"/>
                        )
                    }
                    <InputControlled control={control} label="Password" type="password" name="password"/>
                    <ButtonComponent name="Log in" isLoading={isSubmitting}/>
                </Form>
            </div>
            <ImgAuth src="/assets/imgs/picture.svg" alt="" />
        </FluidContainer>
    </>
    );
}
