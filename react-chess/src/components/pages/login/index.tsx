import { Link } from 'react-router-dom'
import { myAppLink } from '../../Constants'
import styles from './style.module.scss'
import { Box, Button } from '@mui/material'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { NameInput } from '../../utils/validation/validationInputs'
interface LoginFormInputs {
    firstName: string
    lastName: string
    password: string
    confirmPassword: string
    email: string
}
export default function Login() {
    const methods = useForm<LoginFormInputs>({
        mode: 'onChange',
        criteriaMode: 'all',
    })
    const { handleSubmit, formState } = methods
    const { isValid } = formState

    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => console.log(data)
    return (
        <Box className={styles.jack}>
            <FormProvider {...methods}>
                <form
                    className={styles.registration__form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className={styles.registration__title}>Registration</h1>
                    <NameInput name="First Name" />
                    <NameInput name="Last Name" />
                    <NameInput name="Password" />
                    <NameInput name="Confirm Password" type="password" />
                    <NameInput name="Mail" pattern="email" type="email" />
                    {/* {errors.email && (
                        <span className={styles.validation_message}>
                            {errors.email.message}
                        </span>
                    )} */}
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
// function handleKeyDown(
//     event: React.KeyboardEvent<HTMLInputElement>,
//     index: number,
//     inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>,
//     handleSubmit: UseFormHandleSubmit<Inputs, undefined>,
//     isValid: boolean,
//     onSubmit: SubmitHandler<Inputs>
// ) {
//     if (event.key === 'Enter') {
//         event.preventDefault() // предотвращаем отправку формы
//         const nextInput = inputRefs.current[index + 1]
//         if (nextInput) {
//             nextInput.focus() // переводим фокус на следующее поле
//         } else if (isValid) {
//             handleSubmit(onSubmit)() // если все инпуты заполнены, отправляем форму
//         }
//     }
// }
