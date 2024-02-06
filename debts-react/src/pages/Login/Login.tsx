// import React, { useState } from 'react'
import Style from '../Login/Login.module.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const MudarEmail = (e: any) => setEmail(e.target.value)
  const MudarSenha = (e: any) => setSenha(e.target.value)

  const handleSubmit = (event: any) => {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
    console.log('Formulário enviado')
    console.log(email)
    console.log(senha)
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      if (email && senha) {
        handleSubmit(event);
      } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
      }
    }
  };


  return (
    <div className={Style.body}>
      <h1>
        <img src="src/assets/logoDebts.png" alt="Logo do site Debts" />
      </h1>
      <form onSubmit={handleSubmit}> {/* Usando onSubmit para lidar com o envio do formulário */}
        <div className={Style.formItens}>
          <fieldset>
            <p>Seu e-mail:</p>
            <input type="email" value={email} onChange={MudarEmail} required />
          </fieldset>
          <fieldset>
            <p>Sua senha:</p>
            <input type="password" value={senha} onChange={MudarSenha} onKeyDown={handleKeyDown} required />
          </fieldset>
          <p>Não tem uma conta? <a href="/register">Crie uma</a></p>
        </div>

        <button type="submit">Continuar</button>

      </form>
    </div>
  );
};

export default Login;