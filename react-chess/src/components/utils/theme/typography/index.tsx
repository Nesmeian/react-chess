interface themeTypographyParams {
    fontFamily: string
    fontSize: number
    h1: {
        fontSize: number
    }
}

export default function themeTypography(): themeTypographyParams {
    return {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        fontSize: 16, // Change fontSize to a number
        h1: {
            fontSize: 32, // Change h1.fontSize to a number
        },
    }
}
