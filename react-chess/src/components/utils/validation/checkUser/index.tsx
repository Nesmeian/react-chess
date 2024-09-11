import { NavigateFunction } from 'react-router-dom'
import { myAppLink } from '../../../Constants'
import { AuthUser, LoginFormInputs } from '../../../pages/login'
import Alert from '../../alert'

export default function checkUser(
    nickname: string[],
    mail: string[],
    storageData: AuthUser[],
    data: LoginFormInputs,
    navigate: NavigateFunction
) {
    if (nickname.includes(data.email) || mail.includes(data.email)) {
        const user = storageData.find((user) => user.email === data.email)

        if (user && user.password === data.password) {
            Alert('success', 'Login successful', true).then(() => {
                navigate(`${myAppLink}/`)
            })
        } else {
            Alert('error', 'Incorrect password. Please try again.', true)
        }
    } else {
        Alert('error', 'No account found with this email or nickname.', true)
    }
}
