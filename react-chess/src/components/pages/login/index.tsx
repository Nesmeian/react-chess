import { Link } from 'react-router-dom'
import { myAppLink } from '../../Constants'
import styles from './style.module.scss'
import { Box, Button } from '@mui/material'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import CustomTextField from '../../utils/customTextField'
import validationRulesFunc from '../../utils/validationRules'

type Inputs = {
    firstName: string
    lastName: string
}

export default function Login() {
    const methods = useForm<Inputs>({ mode: 'onBlur' })
    const { handleSubmit } = methods

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <Box className={styles.jack}>
            <h1>Hello it's login page</h1>
            <FormProvider {...methods}>
                <form
                    className={styles.registration__form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <CustomTextField
                        name="firstName"
                        label="First Name"
                        validationRules={validationRulesFunc({
                            name: 'First Name',
                            required: true,
                            minLength: 5,
                            maxLength: 15,
                        })}
                    />
                    <CustomTextField
                        name="lastName"
                        label="Last Name"
                        validationRules={validationRulesFunc({
                            name: 'Last Name',
                            required: true,
                            minLength: 5,
                            maxLength: 15,
                        })}
                    />
                    <Button variant="contained" type="submit">
                        Submit
                    </Button>
                </form>
            </FormProvider>
            <Link to={`${myAppLink}/`}>To Home page</Link>
        </Box>
    )
}
