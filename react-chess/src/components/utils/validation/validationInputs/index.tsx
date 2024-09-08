import CustomTextField from '../../customTextField'
import validationRulesFunc from '../validationRules'
interface NameInput {
    name: string
    minLength?: number
    maxLength?: number
    pattern?: string | boolean
    type?: string
}

export function NameInput({
    name,
    minLength,
    maxLength,
    pattern,
    type = 'text',
}: NameInput) {
    return (
        <CustomTextField
            key={name}
            name={name}
            label={name}
            type={type}
            validationRules={validationRulesFunc({
                name: name,
                required: name,
                minLength: minLength ? minLength : 5,
                maxLength: maxLength ? maxLength : 15,
                pattern: pattern ? pattern : true,
            })}
        />
    )
}
