// import React from 'react'
import { useState } from 'react'
import logoDebts from '../../assets/logoDebts.png';
import Style from '../Register/Register.module.css'

const Register = () => {
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmSenha, setConfirmSenha] = useState('')

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [eye, setEye] = useState(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg>`)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [eyeConfirm, setEyeConfirm] = useState(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg>`)

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

    const togglePasswordVisibility = (e) => {
        e.preventDefault(); // Evita o envio do formulário

        if (isPasswordVisible == false) {
            setEye(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
          </svg>`)
        } else {
            setEye(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg>`)
        }

        setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleConfirmPasswordVisibility = (e) => {
        e.preventDefault(); // Evita o envio do formulário

        if (isConfirmPasswordVisible == false) {
            setEyeConfirm(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
          </svg>`)
        } else {
            setEyeConfirm(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg>`)
        }

        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };

    return (
        <div className={Style.body}>
            <h1><img src={logoDebts} alt="Logo do site Debts" /></h1>
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
                        <div className={Style.password}>
                            <input type={isPasswordVisible ? 'text' : 'password'} value={senha} onChange={MudarSenha} required />

                            <button onClick={togglePasswordVisibility}>
                                <div dangerouslySetInnerHTML={{ __html: eye }} />
                            </button>
                        </div>
                    </fieldset>
                    <fieldset>
                        <p>Confirme sua senha:</p>

                        <div className={Style.password}>
                            <input type={isConfirmPasswordVisible ? 'text' : 'password'} value={confirmSenha} onChange={MudarConfirmSenha} onKeyDown={handleKeyDown} required />

                            <button onClick={toggleConfirmPasswordVisibility}>
                                <div dangerouslySetInnerHTML={{ __html: eyeConfirm }} />
                            </button>
                        </div>

                    </fieldset>
                    <p>Já tem uma conta? <a href="/">Entrar</a></p>
                </div>

                <button onClick={handleSubmit}>Continuar</button>

            </form>
        </div>
    )
}

export default Register