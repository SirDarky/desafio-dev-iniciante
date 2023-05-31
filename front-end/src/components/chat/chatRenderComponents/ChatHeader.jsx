import React from 'react'

const ChatHeader = ({user}) => {
  return (
    <header className='flex items-center content-center bg-slate-500 h-16 pl-3 border-l-slate-600 border-2 border-t-transparent border-b-transparent border-r-transparent'>{user}</header>
  )
}

export default ChatHeader