import React, { useEffect, useState } from 'react'
import api from '../../../services/api'
import CardPesquisa from './CardPesquisa'

const Pesquisar = ({setState, state}) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        api.get("/user/users").then(res=>{
            setUsers(res.data.users)
        })
    }, [users])
    
  return (
    <div>
        {users? users.map((user, index)=>(<CardPesquisa user={user} setState={setState} key={index}/>)):"Não há pessoas no sistemas"}
    </div>
  )
}

export default Pesquisar