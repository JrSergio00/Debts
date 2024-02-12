import { ReactNode, useContext } from 'react';
import { AuthContext } from './AuthContext';
import Login from '../../pages/Login/Login';
// import { useNavigate } from 'react-router-dom';

export const RequireAuth = ({ children}: { children: JSX.Element}) => {
    const auth = useContext(AuthContext)
    // const navigate = useNavigate()

    interface MainLayoutProps {
        children: ReactNode;
    }

    // Criando um componente de layout para as outras páginas
    function MainLayout({ children }: MainLayoutProps) {
        const handleLogout = async () => {
            await auth.signout()
            window.location.href = window.location.href
        }

        return (
            <>
                <header>
                    <h1>DEBTS</h1>
                    <nav>
                        <a href="/home">Home Page  </a>
                        <a href="/profile">Profile  </a>
                        <a href="/">Login  </a>
                        {auth.user && <button onClick={handleLogout}>Sair</button>}
                    </nav>

                    <p>Olá, {auth.user?.name}</p>
                </header>
                {children}
            </>
        )
    }



    if(!auth.user) {
        return <Login />
    }

    return <MainLayout>{children}</MainLayout>
}