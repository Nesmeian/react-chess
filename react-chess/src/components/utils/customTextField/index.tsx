import { TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'

interface CustomTextFieldProps {
    name: string
    label: string
    type: string
}
export default function CustomTextField({
    name,
    label,
    type,
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
            type={type}
            {...register(name)}
            error={!!errors[name]}
            helperText={
                typeof errors[name]?.message === 'string'
                    ? errors[name]?.message
                    : ''
            }
        />
    )
}
