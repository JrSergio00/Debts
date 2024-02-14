// App.js
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import HomePage from './pages/HomePage/HomePage'
import { ReactNode} from 'react';
import Register from './pages/Register/Register';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import Profile from './pages/Profile/Profile';

// Definindo o tipo para o atributo children nos componentes de layout
interface LoginLayoutProps {
  children: ReactNode;
}

// Criando um componente de layout para a página de login
function LoginLayout({ children } : LoginLayoutProps) {
  return (
    <>
      {children}
    </>
  )
}

function App() {

  return (
    <Routes>
      {/* ROTAS PÚBLICAS */}
      <Route path="/" element={
          <LoginLayout>
            <Login />
          </LoginLayout>
        }
      />
      <Route path="/register" element={
          <LoginLayout>
            <Register />
          </LoginLayout>
        }
      />
      {/* ROTAS PRIVADAS */}
      <Route path="/home" element={ <RequireAuth><HomePage /></RequireAuth> } />
      <Route path="/profile" element={ <RequireAuth><Profile /></RequireAuth> } />
    </Routes>
  )
}

export default App
