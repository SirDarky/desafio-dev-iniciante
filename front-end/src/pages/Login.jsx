import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'
import { noError, usernameSenhaErrado } from '../components/errors/ErrorCode'
import ErrorMensageComponent from '../components/mensagensComponents/ErrorMensageComponent'
import api from '../services/api'

const Login = () => {
  const [username, setUsername] = useState("")
  const [senha, setSenha] = useState("")
  const [loading, setLoading] = useState(false);
  const [userErro, setUserErro] = useState(false);

    //Navigate
    const navigate = useNavigate()

  const { RealizarNewLoginCliente, VerificarAntigoLogin, authentication } = useAuthContext()

  function userObject() {
    return {
      username: username,
      senha: senha,
    }
  }

  function fazerLogin() {
    setLoading(true)
    if(username && senha){
      const userData = userObject();
      api.post("/login", userData).then(
        res =>{
          RealizarNewLoginCliente(res.data)
          setLoading(false)
          navigate('/');
        }
      ).catch(err=>{
        if(err.response.status ===401){
          setUserErro(usernameSenhaErrado)
          setTimeout(() => {
            setUserErro(noError);
          }, 4000);
        }
      })
    } else {
      alert('Complete os campos')
    }
  }

  useEffect(() => {
    VerificarAntigoLogin()
    if(authentication){
      navigate('/');
    }
  }, [authentication])


  return (
    <div className='flex h-screen w-full pt-10 items-center justify-center'>
      {userErro? <ErrorMensageComponent errorMensage={userErro}/>:""}
      <div className='bg-slate-800 h-96 w-96 flex items-center justify-center flex-col text-white'>
        <h1>Login</h1>
        <div className='py-8 flex flex-col'>
          <input className='px-2 py-1 rounded text-black' type="text" placeholder='Usuario' onChange={(e)=>{setUsername(e.target.value)}}/>
          <input className='mt-4 px-2 py-1 rounded text-black' type="password" placeholder='Senha' onChange={(e)=>{setSenha(e.target.value)}}/>
        </div>
        <button className='bg-slate-50 mb-3 text-black p-2 rounded' onClick={fazerLogin}>Entrar</button>
        <Link to={"/registro"}>Você não possui conta? Clique aqui</Link>
      </div>
    </div>
  )
}

export default Login