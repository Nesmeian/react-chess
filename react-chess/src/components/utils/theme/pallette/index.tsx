import { PaletteMode, PaletteOptions } from '@mui/material'

interface CustomPaletteOptions extends PaletteOptions {
    mode: PaletteMode
}
export default function themePalette(
    themeMode: string = 'light'
): CustomPaletteOptions {
    const mode = themeMode === 'dark' ? 'dark' : 'light'
    return {
        mode: mode,
    }
}
