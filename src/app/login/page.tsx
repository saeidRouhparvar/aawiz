'use client'

import Button from '@/components/ui/Button'
import React, { useState } from 'react'
import { ToggleButton } from '@/components/ui/ToggleButton'
import { useTheme } from '@/context/theme-context'
import { Icon } from '@/components/icons/icon'
import LinkButton from '@/components/ui/Link'
import { useForm } from 'react-hook-form'
import RegisterUi from '@/components/pages/registerUi'
import LoginUi from '@/components/pages/loginUi'
import { Register } from '../utils/types'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import BackgroundAnimation from '@/components/pages/BackgroundAnimation'
import './login.css'

type Login = {
    username: string
    password: string
}

const Login = () => {

    const { theme } = useTheme()
    const [registerState, setRegisterState] = useState(true)
    const router = useRouter()

    // Login form
    const {
        register,
        formState: { errors },
        handleSubmit: handleLoginSubmit
    } = useForm<Login>()

    // Register form
    const {
        register: registerReg,
        formState: { errors: registerError },
        handleSubmit: handleRegisterSubmit
    } = useForm<Register>()

    // --- SUBMIT HANDLERS ---
    const submitLogin = (data: Login) => {
        try {
            const storedData = localStorage.getItem('register')

            if (!storedData) {
                toast.error("No registration found. Please register first.")
                return
            }

            const userData: Register = JSON.parse(storedData)

            if (data.username === userData.username && data.password === userData.password) {
                toast.success("Login successful!")
                router.push('/dashboard')
            } else {
                toast.error("Invalid Username or Password.")
            }

        } catch (error) {
            console.error("Error during login:", error)
            toast.error("An error occurred during login.")
        }
    }

    const submitRegister = (data: Register) => {
        localStorage.setItem('register', JSON.stringify(data))
        setRegisterState(true)
    }

    const onSubmit =
        registerState
            ? handleLoginSubmit(submitLogin)
            : handleRegisterSubmit(submitRegister)

    return (
        <div className={`w-full h-screen overflow-hidden flex justify-center items-center 
            bg-cover bg-no-repeat ${theme === 'light' ? 'bg-light' : 'bg-dark'}`}>

            <div className="flex flex-col items-center justify-center gap-10 z-10">

                {/* Header Controls */}
                <div className="flex items-center gap-4 w-full justify-between lg:justify-center">
                    <div className="p-1 bg-limeV-50 rounded-full flex justify-center items-center">
                        <Icon name='earth' color={theme === 'light' ? "black" : "white"} />
                    </div>
                    <ToggleButton />
                </div>

                {/* Form */}
                <form onSubmit={onSubmit}>
                    <div className="bg-limeV-50 border border-limeV-100 md:w-[35vw] w-full min-h-[60vh]
                        rounded-md p-10 flex flex-col gap-6 justify-center items-center">

                        <h1 className='text-6xl font-bold text-center text-limeV-700'>Aawiz</h1>
                        <p className='text-base text-2xl'>Welcome to the HR System</p>

                        {/* SWITCH FORM */}
                        {registerState ? (
                            <LoginUi register={register} errors={errors} />
                        ) : (
                            <RegisterUi register={registerReg} errors={registerError} />
                        )}

                        {/* Switch between Login/Register */}
                        <div className="flex gap-1 mt-2">
                            <p className='text-neutV-700'>
                                {registerState
                                    ? "Not registered yet?"
                                    : "Login to the panel"}
                            </p>

                            <LinkButton
                                href=""
                                onClick={(e) => {
                                    e.preventDefault()
                                    setRegisterState(!registerState)
                                }}
                            >
                                Click here
                            </LinkButton>
                        </div>

                        <Button type='submit'>Confirmation</Button>
                    </div>
                </form>

            </div>

            <BackgroundAnimation theme={theme} />

        </div>
    )
}

export default Login
