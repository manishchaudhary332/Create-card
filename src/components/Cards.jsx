import React from 'react'
import Card from './Card'

const Cards = ({users,handleRemove}) => {
  return (
    <div className='scroll w-[70%]    flex justify-center items-center flex-wrap gap-4 p-4 overflow-scroll rounded-lg' >
       
       {users.map((item,index)=>{
           return <Card  handleRemove={handleRemove} id={index} user={item} key={index} />
       })}
        
       
    </div>
  )
}

export default Cards