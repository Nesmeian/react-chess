import { Link as LinkRouter } from 'react-router-dom'
import { myAppLink } from '../../Constants'
import { Box, Button, Link } from '@mui/material'
import Header from '../../loyalt/header'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import CustomTextField from '../../utils/customTextField'
import styles from './style.module.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../utils/validation/yupSchema'
import inputFields from './inputFields'
interface LoginFormInputs {
    firstName: string
    password: string
    confirmPassword: string
}

export default function Login() {
    const methods = useForm<LoginFormInputs>({
        mode: 'onChange',
        criteriaMode: 'all',
        resolver: yupResolver(loginSchema),
    })
    const { formState, handleSubmit } = methods
    const { isValid } = formState
    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => console.log(data)
    return (
        <Box className={styles.jack}>
            <Header />
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {inputFields.map((el) => (
                        <CustomTextField
                            key={el.name}
                            name={el.name}
                            label={el.label}
                            type={el.type}
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
                        disabled={!isValid}
                    >
                        Submit
                    </Button>
                </form>
            </FormProvider>
        </Box>
    )
}
