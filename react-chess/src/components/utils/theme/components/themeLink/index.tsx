import { keyframes } from '@emotion/react'

export default function themeLink(mode: string) {
    const color = mode === 'dark' ? 'F5F5F5' : '#FFFFFF'
    const linkAnimation = keyframes`
    0% { color: #fff; }  // White
    50% { color: #0000ff; }  // Amber
    100% { color: #fff; }  // White
  `
    return {
        styleOverrides: {
            root: {
                color: color,
                textDecoration: 'none',
                transition: 'text-decoration 0.2s ease',
                '&:hover': {
                    textDecoration: 'underline',
                    animation: `${linkAnimation} 2s infinite`,
                },
            },
        },
    }
}
