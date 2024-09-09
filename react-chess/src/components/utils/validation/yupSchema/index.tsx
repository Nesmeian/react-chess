import * as Yup from 'yup'
import {
    engPattern,
    maxValidationLength,
    minValidationLength,
    optionalPatern,
} from '../../../Constants'

export const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required(`First Name is required`)
        .min(
            minValidationLength,
            `First Name must be at least ${minValidationLength} characters`
        )
        .max(
            maxValidationLength,
            `First Name must be less than ${maxValidationLength} characters`
        )
        .matches(
            engPattern,
            `First Name can only contain English letters, numbers, and underscores`
        ),
    nickname: Yup.string()
        .nullable()
        .transform((curr, orig) => (orig === '' ? null : curr)) // Преобразование пустой строки в null
        .test(
            'customValidation',
            'Nickname must be either empty or contain only English letters up to 10 characters',
            (value) => {
                if (value && value.length > 2) {
                    return optionalPatern.test(value) // Проверка на английские буквы и длину
                }
                return true // Если длина 2 или меньше, не применяем дополнительные проверки
            }
        ),
    lastName: Yup.string()
        .required(`Last Name is required`)
        .min(
            minValidationLength,
            `Last Name must be at least ${minValidationLength} characters`
        )
        .max(
            maxValidationLength,
            `Last Name must be less than ${maxValidationLength} characters`
        )
        .matches(
            engPattern,
            `Last Name can only contain English letters, numbers, and underscores`
        ),
    email: Yup.string()
        .required(`Email is required`)
        .email(`Invalid email format`)
        .max(
            maxValidationLength,
            `Email must be less than ${maxValidationLength} characters`
        )
        .matches(
            engPattern,
            `Email can only contain English letters, numbers, and underscores`
        ),
    password: Yup.string()
        .required(`Password is required`)
        .min(
            minValidationLength,
            `Password must be at least ${minValidationLength} characters`
        )
        .max(
            maxValidationLength,
            `Password must be less than ${maxValidationLength} characters`
        )
        .matches(
            engPattern,
            `Password can only contain English letters, numbers, and underscores`
        ),
    confirmPassword: Yup.string()
        .required(`Confirm Password is required`)
        .max(
            maxValidationLength,
            `Confirm Password must be less than ${maxValidationLength} characters`
        )
        .oneOf([Yup.ref(`password`)], `Passwords must match`),
})

export const loginSchema = validationSchema.pick([
    'nickname',
    'password',
    'confirmPassword',
    'email',
])
