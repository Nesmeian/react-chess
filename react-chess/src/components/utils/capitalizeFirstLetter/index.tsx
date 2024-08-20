export default function capitalizeFirstLetterOfEachWord(input: string): string {
    return input
        .split(' ') // Разделяем строку на массив слов
        .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ) // Преобразуем каждое слово
        .join(' ') // Объединяем слова обратно в строку
}
