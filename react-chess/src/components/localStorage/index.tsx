export default function checkUsers() {
    if (!localStorage.getItem('AuthUsers')) {
        localStorage.setItem('AuthUsers', JSON.stringify([]))
    }
}
