<<<<<<< HEAD
import { TextField, useMediaQuery } from '@mui/material'
=======
import { TextField } from '@mui/material'
>>>>>>> develop
import { useFormContext } from 'react-hook-form'

interface CustomTextFieldProps {
    name: string
    label: string
    type: string
<<<<<<< HEAD
    inputRef?: React.RefCallback<HTMLInputElement>
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

=======
    validationRules?: object
}
>>>>>>> develop
export default function CustomTextField({
    name,
    label,
    type,
<<<<<<< HEAD
    inputRef,
    onKeyDown,
=======
    validationRules = {},
>>>>>>> develop
}: CustomTextFieldProps) {
    const {
        register,
        formState: { errors },
    } = useFormContext()
<<<<<<< HEAD
    const isTableScreen = useMediaQuery('(max-width:768px)')
=======
>>>>>>> develop
    return (
        <TextField
            id={`${name}-input`}
            label={label}
<<<<<<< HEAD
            variant={isTableScreen ? 'filled' : 'outlined'}
            type={type}
            {...register(name)}
=======
            variant="outlined"
            type={type}
            {...register(name, validationRules)}
>>>>>>> develop
            error={!!errors[name]}
            helperText={
                typeof errors[name]?.message === 'string'
                    ? errors[name]?.message
                    : ''
            }
<<<<<<< HEAD
            color="primary"
            inputRef={inputRef}
            onKeyDown={onKeyDown}
=======
>>>>>>> develop
        />
    )
}
