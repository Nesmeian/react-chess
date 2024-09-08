import React, { useRef, useCallback } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { myAppLink } from '../../Constants'
import styles from './style.module.scss'
import { Box, Button, Link, Typography } from '@mui/material'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { validationSchema } from '../../utils/validation/yupSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import CustomTextField from '../../utils/customTextField'
import Header from '../../loyalt/header'

interface RegistrationFormInputs {
    firstName: string
    lastName: string
    password: string
    confirmPassword: string
    email: string
}

export default function Registration() {
    const methods = useForm<RegistrationFormInputs>({
        mode: 'onChange',
        criteriaMode: 'all',
        resolver: yupResolver(validationSchema),
    })
    const { handleSubmit, formState } = methods
    const { isValid } = formState

    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    const onSubmit: SubmitHandler<RegistrationFormInputs> = useCallback(
        (data) => {
            const dataName = `${data.email} ${data.firstName} ${data.lastName}`
            console.log(data.email)
            localStorage.setItem(dataName, JSON.stringify(data))
        },
        []
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

    const fields = [
        {
            name: 'firstName',
            label: 'First Name',
            type: 'text',
        },
        {
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
        },
        {
            name: 'confirmPassword',
            label: 'Confirm Password',
            type: 'password',
        },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
        },
    ]
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
                        {fields.map((field, index) => (
                            <CustomTextField
                                key={field.name}
                                name={field.name}
                                label={field.label}
                                type={field.type}
                                inputRef={(el) =>
                                    (inputRefs.current[index] = el)
                                }
                                onKeyDown={(e) => handleKeyDown(e, index)}
                            />
                        ))}

                        <Button
                            variant="contained"
                            type="submit"
                            disabled={!isValid} // Кнопка отключена, если форма не валидна
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
