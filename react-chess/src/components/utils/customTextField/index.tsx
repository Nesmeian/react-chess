import { InputAdornment, TextField, useMediaQuery } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import DetailsIcon from '@mui/icons-material/Details'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

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
    const [showPassword, setShowPassword] = useState(false)
    const handleIconClick = () => {
        setShowPassword(!showPassword)
    }
    return (
        <TextField
            id={`${name}-input`}
            label={label}
            variant={isTableScreen ? 'filled' : 'outlined'}
            type={
                type === 'password'
                    ? showPassword
                        ? 'text'
                        : 'password'
                    : type
            }
            {...register(name)}
            error={!!errors[name]}
            helperText={
                typeof errors[name]?.message === 'string'
                    ? errors[name]?.message
                    : ''
            }
            InputProps={{
                endAdornment: isOptional ? (
                    <InputAdornment position="end">
                        <DetailsIcon />
                    </InputAdornment>
                ) : type === 'password' ? (
                    <InputAdornment position="end">
                        {showPassword ? (
                            <VisibilityOffIcon
                                onClick={handleIconClick}
                                style={{ cursor: 'pointer' }}
                            />
                        ) : (
                            <VisibilityIcon
                                onClick={handleIconClick}
                                style={{ cursor: 'pointer' }}
                            />
                        )}
                    </InputAdornment>
                ) : undefined,
            }}
            color="primary"
            inputRef={inputRef}
            onKeyDown={onKeyDown}
        />
    )
}
