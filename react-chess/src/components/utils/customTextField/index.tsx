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
    // Объединение классов
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
            InputProps={{
                sx: {
                    // fontFamily: 'Open Sans', 'sans-serif', 'FontAwesome',
                    color: 'rgb(52, 56, 61)',
                }, // Цвет текста внутри TextField
            }}
            InputLabelProps={{
                sx: { color: 'rgb(52, 56, 61)' }, // Цвет метки (label)
            }}
            inputRef={inputRef}
            onKeyDown={onKeyDown}
        />
    )
}
