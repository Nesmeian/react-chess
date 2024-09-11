import { useNavigate } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import Header from '../../loyalt/header'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import CustomTextField from '../../utils/customTextField'
import styles from './style.module.scss'
import inputFields from './inputFields'
import { useCallback, useRef } from 'react'
import checkUser from '../../utils/validation/checkUser'
export interface LoginFormInputs {
    email: string
    password: string
}
export interface AuthUser {
    email: string
    password: string
    nickname: string
}
export default function Login() {
    const methods = useForm<LoginFormInputs>({
        mode: 'onChange',
        criteriaMode: 'all',
    })
    const navigate = useNavigate()
    const { handleSubmit, watch } = methods
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])
    const fields = watch()

    const allFieldsFilled = inputFields.every((field) => {
        const fieldName = field.name as keyof LoginFormInputs // Приведение типа
        return fields[fieldName]
    })

    const onSubmit: SubmitHandler<LoginFormInputs> = useCallback(
        async (data) => {
            const storageData: AuthUser[] = JSON.parse(
                localStorage.getItem('AuthUsers') || '[]'
            )
            const nickname = storageData.map((e) => {
                return e.nickname
            })
            const mail = storageData.map((e) => e.email)
            checkUser(nickname, mail, storageData, data, navigate)
        },
        [navigate]
    )

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
            if (event.key === 'Enter') {
                event.preventDefault()

                if (allFieldsFilled) {
                    handleSubmit(onSubmit)()
                } else {
                    const nextIndex = (index + 1) % inputRefs.current.length
                    inputRefs.current[nextIndex]?.focus()
                }
            }
        },
        [handleSubmit, onSubmit, allFieldsFilled]
    )

    return (
        <Box className={styles.login__wrpapper}>
            <Header />
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <Typography variant="h1"> Login</Typography>
                    {inputFields.map((el, index) => (
                        <CustomTextField
                            key={el.name}
                            name={el.name}
                            label={el.label}
                            type={el.type}
                            inputRef={(el) => (inputRefs.current[index] = el)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                    ))}
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={!allFieldsFilled}
                    >
                        Submit
                    </Button>
                </form>
            </FormProvider>
        </Box>
    )
}
