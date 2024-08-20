import { TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'

interface CustomTextFieldProps {
    name: string
    label: string
    validationRules?: object
}
export default function CustomTextField({
    name,
    label,
    validationRules = {},
}: CustomTextFieldProps) {
    const {
        register,
        formState: { errors },
    } = useFormContext()
    return (
        <TextField
            id={`${name}-input`}
            label={label}
            variant="outlined"
            {...register(name, validationRules)}
            error={!!errors[name]}
            helperText={
                typeof errors[name]?.message === 'string'
                    ? errors[name]?.message
                    : ''
            }
        />
    )
}
