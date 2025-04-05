import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'



const App = () => {
  const [users, setusers] = useState([])

  const FormHandleSubmitData = (data)=>{ 
    setusers([...users, data])
  }

  const handleRemove = (id)=>{
    setusers( users.filter((item,index)=> index!= id ))
  }


  return (
    <div className=' w-full h-screen bg-zinc-400  flex flex-col' >
      <div className='  h-[100px]  flex justify-center items-center rounded-lg '>
      <Form FormHandleSubmitData={FormHandleSubmitData}/>
      </div>
      <div className='w-[80%] mx-auto  mt-4'>
      <Cards handleRemove={handleRemove} users={users}/>

      </div>

    </div>
  )
}

export default App