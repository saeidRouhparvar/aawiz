import React, { FC } from 'react'
import Input from '../ui/Input'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { Register } from '@/app/utils/types'

interface RegisterUiProps {
    register: UseFormRegister<Register>;
    errors: FieldErrors<Register>;
}
const RegisterUi: FC<RegisterUiProps> = ({ register, errors }) => {

    return (
        <div className="flex flex-col gap-6 w-full">
            <Input label='Name' icon='user'  {...register("name", {
                required: "Name is require"
            })}
                error={errors.username?.message}
            />
            <Input label='User Name' icon='user' {...register("username", {
                required: "User name is require"
            })}
                error={errors.password?.message}
            />
            <Input label='Password' icon='password'  {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "You should add at least 6 characters." },

            })}
                error={errors.name?.message}
            />
        </div>
    )
}

export default RegisterUi