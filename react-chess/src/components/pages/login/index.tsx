import { Link } from 'react-router-dom'
import { myAppLink } from '../../Constants'
import './index.css'
import { useForm, SubmitHandler } from 'react-hook-form'
type Inputs = {
    example: string
    exampleRequired: string
}
export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <>
            <h1>Hello it's login page</h1>
            <form
                className="registration-page__form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label>
                    {' '}
                    First Name:{' '}
                    <input
                        {...register('example', {
                            required: true,
                        })}
                    />
                </label>
                <div>{errors.example && 'This field is required'}</div>
                <input type="submit" value={'Submit'} />
            </form>
            <Link to={`${myAppLink}/`}>To Home page</Link>
        </>
    )
}
