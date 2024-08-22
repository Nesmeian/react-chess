import { Link } from 'react-router-dom'
import { myAppLink } from '../../Constants'
import styles from './style.module.scss'
import { Box, Button } from '@mui/material'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { validationSchema } from '../../utils/validation/yupSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import CustomTextField from '../../utils/customTextField'
interface RegistrationionFormInputs {
    firstName: string
    lastName: string
    password: string
    confirmPassword: string
    email: string
}
export default function Registration() {
    const methods = useForm<RegistrationionFormInputs>({
        mode: 'onChange',
        criteriaMode: 'all',
        resolver: yupResolver(validationSchema),
    })
    const { handleSubmit, formState } = methods
    const { isValid } = formState

    const onSubmit: SubmitHandler<RegistrationionFormInputs> = (data) =>
        console.log(data)
    return (
        <Box className={styles.jack}>
            <FormProvider {...methods}>
                <form
                    className={styles.registration__form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className={styles.registration__title}>Registration</h1>
                    <CustomTextField
                        name="firstName"
                        label="First Name"
                        type="text"
                    />
                    <CustomTextField
                        name="lastName"
                        label="Last Name"
                        type="text"
                    />
                    <CustomTextField
                        name="password"
                        label="Password"
                        type="password"
                    />
                    <CustomTextField
                        name="confirmPassword"
                        type="password"
                        label="Confirm Password"
                    />
                    <CustomTextField name="email" label="Email" type="email" />
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={!isValid}
                    >
                        Submit
                    </Button>
                </form>
            </FormProvider>
            <div>
                <Link to={`${myAppLink}/`}>To Home page</Link>
            </div>
        </Box>
    )
}
