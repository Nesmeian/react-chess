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
    nickname?: string | null
    password: string
    confirmPassword: string
    email: string
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
    const allFieldsFilled = Object.values(fields).every(
        (value) => value !== '' && value !== null
    )
    const onSubmit: SubmitHandler<LoginFormInputs> = useCallback(
        async (data) => {
            console.log(data)
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
