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
    mail.forEach((el, index) => {
        if (data.email === el) {
            console.log('el')
            console.log(data.email, el)
            if (storageData[index].password === data.password) {
                Alert('success', 'mail').then(() => {
                    navigate(`${myAppLink}/`)
                })
            } else {
                Alert('error', 'Nope')
            }
        }
    })
    nickname.forEach((el, index) => {
        if (data.email === el) {
            console.log('el')
            console.log(data.email, el)
            if (storageData[index].password === data.password) {
                Alert('success', 'nickName').then(() => {
                    navigate(`${myAppLink}/`)
                })
            } else {
                Alert('error', 'Nope')
            }
        }
    })
}
