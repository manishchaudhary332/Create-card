import React from 'react'
import Card from './Card'

const Cards = ({users,handleRemove}) => {
  return (
    <div className='scroll flex justify-center items-center flex-wrap gap-4 p-1 overflow-scroll rounded-lg' >
       
       {users.map((item,index)=>{
           return <Card  handleRemove={handleRemove} id={index} user={item} key={index} />
       })}
        
       
    </div>
  )
}

export default Cards