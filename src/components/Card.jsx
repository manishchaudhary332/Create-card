import React from 'react'

const Card = ({user,handleRemove,id}) => {
  return (

     <div  className='w-[200px] h-[250px] rounded shadow-lg shadow-black flex flex-col justify-center items-center  p-2'>
        <img className='h-[80px] w-[80px] object-top rounded-full object-cover' src={user.img} alt="" />
        <h1>Name: {user.name}</h1>
        <h2 className='text-[13px] text-center'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis atque nostrum tenetur?</h2>
        <button onClick={()=> handleRemove(id)
        } className='px-3 py-1  rounded p-1 bg-red-400 text-white'>Remove it</button>
    </div>
    

  )
}

export default Card