import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../context/authContext'
import { Link, useNavigate  } from 'react-router-dom'
import api from '../services/api'
import LoadingComponent from '../components/mensagensComponents/LoadingComponent'
import { emailExist, noError } from '../components/errors/ErrorCode'
import ErrorMensageComponent from '../components/mensagensComponents/ErrorMensageComponent'
import ErrorComponent from '../components/mensagensComponents/ErrorComponent'

const Registro = () => {
  const  { RealizarNewLoginCliente, VerificarAntigoLogin, authentication  } = useAuthContext()
  const [username, setUsername] = useState("")
  const [senha, setSenha] = useState("")
  const [senhaNovamente, setSenhaNovamente] = useState("")
  const [errorCode, setErrorCode] = useState(noError)
  const [loading, setLoading] = useState(false)

  //Navigate
  const navigate = useNavigate()

  const fazerRegistro = ()=>{
    setLoading(true)
    if(senha===senhaNovamente){
      if(username && senha){
        const novoUser={
          username: username,
          senha:senha
        }
        api.post('/register', novoUser).then(
          res => {
            setLoading(false);
            navigate('/login');
          }
        ).catch(error => {
          if(error.response.data.code===11000){
            setErrorCode(emailExist);
            setTimeout(() => {
              setErrorCode(noError);
            }, 4000);
          } else {
            console.log(error);
          }
          setLoading(false);
        });
      } else{
        alert('Falta completar os campos')
      }
    } else{
      alert('Senhas diferentes')
    }
  }

  useEffect(() => {
    VerificarAntigoLogin()
    if(authentication){
      navigate('/');
    }
  }, [authentication])
  
  return (
    <div className='flex h-screen w-full pt-10 items-center justify-center bg-gray-500'>
      {loading? <LoadingComponent/>: ""}
      {errorCode?<ErrorMensageComponent errorMensage={errorCode}/>:""}
      <div className='bg-slate-800 h-96 w-96 flex items-center justify-center flex-col text-white rounded'>
        <h1>Registro</h1>
        <div className='flex items-center justify-center flex-col text-black'>
          <input type="text" className='mt-4 p-2 w-52 rounded-lg' placeholder='Digite seu Username' onChange={(e)=>{setUsername(e.target.value)}}/>
          <input type="password" className='my-4 p-2 w-52 rounded-lg' placeholder='Digite sua Senha' onChange={(e)=>{setSenha(e.target.value)}}/>
          <input type="password" className='p-2 w-52 rounded-lg' placeholder='Digite novamente a Senha' onChange={(e)=>{setSenhaNovamente(e.target.value)}}/>
        </div>
        <button className='mt-7 bg-white text-black p-2 rounded' onClick={fazerRegistro}>Registrar</button>
      </div>
    </div>
  )
}

export default Registro