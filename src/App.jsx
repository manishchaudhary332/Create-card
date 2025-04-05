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
    <div className='h-screen w-full bg-gray-500 flex flex-col justify-center items-center p-10' >
      <Cards handleRemove={handleRemove} users={users}/>
      <Form FormHandleSubmitData={FormHandleSubmitData}/>

    </div>
  )
}

export default App