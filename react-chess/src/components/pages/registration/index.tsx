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
import Swal from 'sweetalert2'
import inputFields from './inputData'

interface RegistrationFormInputs {
    firstName: string
    lastName: string
    password: string
    confirmPassword: string
    email: string
    nickname?: string | undefined | null
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

    const onSubmit: SubmitHandler<RegistrationFormInputs> = useCallback(
        async (data) => {
            const dataName = `${data.email} ${data.firstName} ${data.lastName}`
            if (localStorage.getItem(dataName)) {
                Swal.fire({
                    icon: 'error',
                    title: 'This email is already used',
                    showConfirmButton: false,
                    timer: 1500,
                })
            } else {
                await Swal.fire({
                    icon: 'success',
                    title: 'Registration successful',
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    localStorage.setItem(dataName, JSON.stringify(data))
                    navigate(`${myAppLink}/`) // Redirect to home page
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
