import capitalizeFirstLetterOfEachWord from '../capitalizeFirstLetter'

interface validationRulesParams {
    name?: string
    required?: string | boolean
    minLength?: number | string
    maxLength?: number | string
}
export default function validationRulesFunc(options: validationRulesParams) {
    const name = options.name ? options.name : 'Input'
    const required =
        options.required === true ||
        typeof options.required !== 'string' ||
        !options.required.trim()
            ? 'Input is required'
            : `${capitalizeFirstLetterOfEachWord(name)} is required`

    const minLength = options.minLength
        ? {
              value: options.minLength,
              message: `Min Length of ${name} must be ${options.minLength}`,
          }
        : undefined
    const maxLength = options.maxLength
        ? {
              value: options.maxLength,
              message: `Max Length of ${name} must be ${options.maxLength}`,
          }
        : undefined
    return {
        required,
        minLength,
        maxLength,
    }
}
