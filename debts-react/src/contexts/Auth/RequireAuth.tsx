import { ReactNode, useContext } from 'react';
import { AuthContext } from './AuthContext';
import Login from '../../pages/Login/Login';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {

    interface MainLayoutProps {
        children: ReactNode;
    }

    // Criando um componente de layout para as outras páginas
    function MainLayout({ children }: MainLayoutProps) {
        return (
            <>
                <header>
                    <h1>DEBTS</h1>
                    <nav>
                        <a href="/home">Home Page  </a>
                        <a href="/profile">Profile  </a>
                        <a href="/">Login  </a>
                    </nav>
                </header>
                {children}
            </>
        )
    }

    const auth = useContext(AuthContext)

    if(!auth.user) {
        return <Login />
    }

    return <MainLayout>{children}</MainLayout>
}