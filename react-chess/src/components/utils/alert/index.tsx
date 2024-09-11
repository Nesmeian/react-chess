import Swal from 'sweetalert2'
type AlertIcon = 'error' | 'success'
export default function Alert(
    icon: AlertIcon,
    purpose: string,
    isLogin?: boolean
) {
    return Swal.fire({
        icon: icon,
        title: isLogin
            ? icon === 'error'
                ? purpose
                : `Login successful`
            : icon === 'error'
              ? `This ${purpose} is already used`
              : `${purpose} successful`,
        showConfirmButton: false,
        timer: 1500,
    })
}
