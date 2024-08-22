import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Game from './components/pages/game/index.tsx'
import Registration from './components/pages/registration/index.tsx'
import { myAppLink } from './components/Constants/index.tsx'
import SignIn from './components/pages/signIn/index.tsx'
import ErrorElement from './components/pages/404/index.tsx'
const router = createBrowserRouter([
    {
        path: `${myAppLink}/`,
        element: <App />,
        errorElement: <ErrorElement />,
    },
    {
        path: `${myAppLink}/game`,
        element: <Game />,
    },
    {
        path: `${myAppLink}/registration`,
        element: <Registration />,
    },
    {
        path: `${myAppLink}/signIn`,
        element: <SignIn />,
    },
    {
        path: '*', // Обработка всех несуществующих маршрутов
        element: <ErrorElement />,
    },
])
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
