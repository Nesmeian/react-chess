import { TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'

interface CustomTextFieldProps {
    name: string
    label: string
    type: string
    inputRef?: React.RefCallback<HTMLInputElement>
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export default function CustomTextField({
    name,
    label,
    type,
    inputRef,
    onKeyDown,
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
            color="primary"
            inputRef={inputRef}
            onKeyDown={onKeyDown}
        />
    )
}
