// import React from 'react'
import { useState } from 'react'
import Style from '../Register/Register.module.css'

const Register = () => {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmSenha, setConfirmSenha] = useState('')

    const MudarNome = (e: any) => setNome(e.target.value)
    const MudarSobrenome = (e: any) => setSobrenome(e.target.value)
    const MudarEmail = (e: any) => setEmail(e.target.value)
    const MudarSenha = (e: any) => setSenha(e.target.value)
    const MudarConfirmSenha = (e: any) => setConfirmSenha(e.target.value)

    const handleSubmit = (event: any) => {
        event.preventDefault(); // Impede o comportamento padrão de envio do formulário
        console.log('Formulário enviado');
        console.log(nome);
        console.log(sobrenome);
        console.log(email);
        console.log(senha);
        console.log(confirmSenha);
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            if (nome && sobrenome && email && senha && confirmSenha) {
                handleSubmit(event);
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        }
    };


    return (
        <div className={Style.body}>
            <h1><img src="src/assets/logoDebts.png" alt="Logo do site Debts" /></h1>
            <form>
                <div className={Style.formItens}>
                    <fieldset>
                        <p>Seu nome:</p>
                        <input type="text" value={nome} onChange={MudarNome} required />
                    </fieldset>
                    <fieldset>
                        <p>Seu sobrenome:</p>
                        <input type="text" value={sobrenome} onChange={MudarSobrenome} required />
                    </fieldset>
                    <fieldset>
                        <p>Seu e-mail:</p>
                        <input type="email" value={email} onChange={MudarEmail} required />
                    </fieldset>
                    <fieldset>
                        <p>Crie uma senha:</p>
                        <input type="password" value={senha} onChange={MudarSenha} required />
                    </fieldset>
                    <fieldset>
                        <p>Confirme sua senha:</p>
                        <input type="password" value={confirmSenha} onChange={MudarConfirmSenha} onKeyDown={handleKeyDown} required />
                    </fieldset>
                    <p>Já tem uma conta? <a href="/">Entrar</a></p>
                </div>

                <button onClick={handleSubmit}>Continuar</button>

            </form>
        </div>
    )
}

export default Register