import { TextField, useMediaQuery } from '@mui/material'
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
    const isSmallScreen = useMediaQuery('(max-width:768px)')
    return (
        <TextField
            id={`${name}-input`}
            label={label}
            variant={isSmallScreen ? 'filled' : 'outlined'}
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
