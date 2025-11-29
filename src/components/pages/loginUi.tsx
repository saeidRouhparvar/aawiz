import React, { FC } from 'react'
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import Input from '../ui/Input'
import { Login } from '@/app/utils/types'

interface LoginUiProps {
    register: UseFormRegister<Login>;
    errors: FieldErrors<Login>;
}

const LoginUi: FC<LoginUiProps> = ({ register, errors }) => {
    return (
        <div className="flex flex-col gap-6 w-full">
            <Input
                label='User name'
                icon='user'
                {...register("username", {
                    required: "Username is required"
                })}
                error={errors.username?.message}
                autoComplete='username'
            />
            <Input
                label='Password'
                icon='password'
                type='password'
                {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "You should add at least 6 characters." },
                })}
                error={errors.password?.message}
                autoComplete='current-password'
            />
        </div>
    )
}

export default LoginUi