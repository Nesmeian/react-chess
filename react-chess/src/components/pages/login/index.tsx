import { Link as LinkRouter } from 'react-router-dom'
import { myAppLink } from '../../Constants'
import { Box, Button, Link } from '@mui/material'
import Header from '../../loyalt/header'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import CustomTextField from '../../utils/customTextField'
import styles from './style.module.scss'
import inputFields from './inputFields'
import { useCallback, useRef } from 'react'

interface LoginFormInputs {
    email: string
    password: string
}

export default function Login() {
    const methods = useForm<LoginFormInputs>({
        mode: 'onChange',
        criteriaMode: 'all',
    })

    const { handleSubmit, watch } = methods
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])
    const fields = watch()

    // Check if all fields are filled
    const allFieldsFilled = inputFields.every((field) => {
        const fieldName = field.name as keyof LoginFormInputs // Приведение типа
        return fields[fieldName]
    })

    const onSubmit: SubmitHandler<LoginFormInputs> = useCallback(
        async (data) => {
            const storageData = JSON.parse(
                localStorage.getItem('AuthUsers') || '[]'
            )
            const nickname = storageData.map((e) => e.nickname)
            const mail = storageData.map((e) => e.email)
            mail.forEach((el, index) => {
                if (data.email === el) {
                    console.log('el')
                    console.log(data.email, el)
                    if (storageData[index].password === data.password) {
                        console.log('YES')
                    } else {
                        console.log('NOPE')
                    }
                }
            })
            nickname.forEach((el, index) => {
                if (data.email === el) {
                    console.log('el')
                    console.log(data.email, el)
                    if (storageData[index].password === data.password) {
                        console.log('YES')
                    } else {
                        console.log('NOPE')
                    }
                }
            })
        },
        []
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
        <Box>
            <Header />
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.jack}>
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
                    <Link
                        component={LinkRouter}
                        to={`${myAppLink}/`}
                        color="inherit"
                    >
                        Go back to Home
                    </Link>
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
