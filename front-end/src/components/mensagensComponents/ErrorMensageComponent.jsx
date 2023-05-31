import React from 'react'

const ErrorMensageComponent = ({errorMensage}) => {
  return (
    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center'>
        <div className='bg-white rounded-lg px-5 text-red-600 flex items-center justify-center flex-col py-5 pb-10'>
            <h1 className='mt-4'>ERRO: {errorMensage} </h1>
        </div>
    </div>
  )
}

export default ErrorMensageComponent