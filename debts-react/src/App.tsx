// App.js
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import HomePage from './pages/HomePage/HomePage'
import { ReactNode } from 'react';
import Register from './pages/Register/Register';

// Definindo o tipo para o atributo children nos componentes de layout
interface LoginLayoutProps {
  children: ReactNode;
}

interface MainLayoutProps {
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

// Criando um componente de layout para as outras páginas
function MainLayout({ children } : MainLayoutProps) {
  return (
    <>
      <header>
        <h1>DEBTS</h1>
        <nav>
          <a href="/home">Home Page</a>
          <a href="/">Login</a>
        </nav>
      </header>
      {children}
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LoginLayout>
            <Login />
          </LoginLayout>
        }
      />
      <Route
        path="/register"
        element={
          <LoginLayout>
            <Register />
          </LoginLayout>
        }
      />
      <Route
        path="/home"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
    </Routes>
  )
}

export default App
