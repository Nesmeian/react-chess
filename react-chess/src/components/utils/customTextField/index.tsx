import { InputAdornment, TextField, useMediaQuery } from '@mui/material'
import { useFormContext } from 'react-hook-form'

interface CustomTextFieldProps {
    name: string
    label: string
    type: string
    inputRef?: React.RefCallback<HTMLInputElement>
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    isOptional?: boolean
}

export default function CustomTextField({
    name,
    label,
    type,
    inputRef,
    onKeyDown,
    isOptional,
}: CustomTextFieldProps) {
    const {
        register,
        formState: { errors },
    } = useFormContext()
    const isTableScreen = useMediaQuery('(max-width:768px)')
    return (
        <TextField
            id={`${name}-input`}
            label={label}
            variant={isTableScreen ? 'filled' : 'outlined'}
            type={type}
            {...register(name)}
            error={!!errors[name]}
            helperText={
                typeof errors[name]?.message === 'string'
                    ? errors[name]?.message
                    : ''
            }
            slotProps={
                isOptional
                    ? {
                          input: {
                              endAdornment: (
                                  <InputAdornment position="end">
                                      Start
                                  </InputAdornment>
                              ),
                          },
                      }
                    : undefined
            }
            color="primary"
            inputRef={inputRef}
            onKeyDown={onKeyDown}
        />
    )
}
