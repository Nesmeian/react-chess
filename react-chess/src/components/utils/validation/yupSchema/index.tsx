import * as Yup from 'yup'
import {
    engPattern,
    maxValidationLength,
    minValidationLength,
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
            `First Name must be less than ${maxValidationLength} charters`
        )
        .matches(
            engPattern,
            `First Name can only contain engilsh letters, numbers, and underscores`
        ),
    lastName: Yup.string()
        .required(`Last Name is required`)
        .min(
            minValidationLength,
            `Last Name must be at least ${minValidationLength} characters`
        )
        .max(
            maxValidationLength,
            `First Name must be less than ${maxValidationLength} charters`
        )
        .matches(
            engPattern,
            `First Name can only contain engilsh letters, numbers, and underscores`
        ),
    email: Yup.string()
        .required(`Email is required`)
        .email(`Invalid email format`)
        .max(
            maxValidationLength,
            `First Name must be less than ${maxValidationLength} charters`
        )
        .matches(
            engPattern,
            `First Name can only contain engilsh letters, numbers, and underscores`
        ),

    password: Yup.string()
        .required(`Password is required`)
        .min(minValidationLength, `Password must be at least 6 characters`)
        .max(
            maxValidationLength,
            `First Name must be less than ${maxValidationLength} charters`
        )
        .matches(
            engPattern,
            `First Name can only contain engilsh letters, numbers, and underscores`
        ),
    confirmPassword: Yup.string()
        .required(`Confirm Password is required`)
        .max(
            maxValidationLength,
            `First Name must be less than ${maxValidationLength} charters`
        )
        .oneOf([Yup.ref(`password`)], `Passwords must match`),
})
