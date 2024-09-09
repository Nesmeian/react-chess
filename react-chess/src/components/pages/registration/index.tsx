import React, { useRef, useCallback } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { myAppLink } from '../../Constants'
import styles from './style.module.scss'
import { Box, Button, Link, Typography } from '@mui/material'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { validationSchema } from '../../utils/validation/yupSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import CustomTextField from '../../utils/customTextField'
import Header from '../../loyalt/header'
import inputFields from './inputData'
import checkUsers from '../../localStorage'
import Alert from '../../utils/alert'

interface RegistrationFormInputs {
    firstName: string
    lastName: string
    password: string
    confirmPassword: string
    email: string
    nickname?: string | null
}
interface UserToAdd {
    nickname?: string | undefined
    email: string
    password: string
    firstName: string
    lastName: string
}
export default function Registration() {
    const navigate = useNavigate()
    const methods = useForm<RegistrationFormInputs>({
        mode: 'onChange',
        criteriaMode: 'all',
        resolver: yupResolver(validationSchema),
    })
    const { handleSubmit, formState } = methods
    const { isValid } = formState

    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    const checkAuthUsers = (property: string, value: string): boolean => {
        const storedData = localStorage.getItem('AuthUsers')
        if (!storedData) {
            return false
        }

        const authUsers: { [key: string]: string }[] = JSON.parse(storedData)
        return authUsers.some((el) => el[property] === value)
    }

    const onSubmit: SubmitHandler<RegistrationFormInputs> = useCallback(
        async (data) => {
            checkUsers()

            const storedData = localStorage.getItem('AuthUsers')
            const nickname: string | null | undefined = data.nickname

            const authUsers: UserToAdd[] = storedData
                ? Array.isArray(JSON.parse(storedData))
                    ? JSON.parse(storedData)
                    : []
                : []

            if (checkAuthUsers('email', data.email)) {
                Alert('error', 'Email')
            } else if (nickname && checkAuthUsers('nickname', nickname)) {
                Alert('error', 'Nickname')
            } else {
                Alert('success', 'Registration').then(() => {
                    const userToAdd: UserToAdd = {
                        email: data.email,
                        password: data.password,
                        firstName: data.firstName,
                        lastName: data.lastName,
                        ...(data.nickname ? { nickname: data.nickname } : {}),
                    }
                    authUsers.push(userToAdd)
                    localStorage.setItem('AuthUsers', JSON.stringify(authUsers))
                    navigate(`${myAppLink}/`)
                })
            }
        },
        [navigate]
    )

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
            if (event.key === 'Enter') {
                event.preventDefault()

                if (isValid) {
                    handleSubmit(onSubmit)()
                } else {
                    const nextIndex = (index + 1) % inputRefs.current.length
                    inputRefs.current[nextIndex]?.focus()
                }
            }
        },
        [handleSubmit, isValid, onSubmit]
    )

    return (
        <Box className={styles.registration__wrapper}>
            <Header />
            <Box className={styles.regisration__container}>
                <FormProvider {...methods}>
                    <form
                        className={styles.registration__form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Typography
                            variant="h1"
                            className={styles.registration__title}
                        >
                            Registration
                        </Typography>
                        {inputFields.map((field, index) => (
                            <CustomTextField
                                key={field.name}
                                name={field.name}
                                label={field.label}
                                type={field.type}
                                inputRef={(el) =>
                                    (inputRefs.current[index] = el)
                                }
                                isOptional={field.isOptional}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                            />
                        ))}
                        <Button
                            variant="contained"
                            type="submit"
                            disabled={!isValid}
                        >
                            Submit
                        </Button>
                    </form>
                </FormProvider>
            </Box>
            <Link component={RouterLink} to={`${myAppLink}/`}>
                To Home page
            </Link>
        </Box>
    )
}
