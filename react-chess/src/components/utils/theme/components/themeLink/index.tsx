export default function themeLink() {
    return {
        styleOverrides: {
            root: {
                textDecoration: 'none', // Убираем подчеркивание
                '&:hover': {
                    textDecoration: 'underline', // Подчеркивание при наведении
                },
            },
        },
    }
}
