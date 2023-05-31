import React from 'react'

const Mensagem = ({msg, myUser}) => {
    if(myUser){
        return (
            <div className='h-max flex flex-wrap w-full'>
                <div className='bg-green-800 w-max py-2 px-4 my-2 end-1 ml-auto max-w-xl'>
                    <span>{msg}</span>
                </div>
            </div>
        )
    } else{
        return (
            <div className='bg-slate-500 w-max py-2 px-4 my-2 max-w-xl'>
                <span>{msg}</span>
            </div>
        )
    }
    
}

export default Mensagem