import React from 'react'
import {useForm} from 'react-hook-form'

const Form = ({FormHandleSubmitData}) => {
  const { register ,handleSubmit,reset} =  useForm()

  const handleFromSubmit = (data)=>{
      FormHandleSubmitData(data)
      reset()
  }

  return (
    <div className='  '>
    <form action="'" onSubmit={handleSubmit(handleFromSubmit )}>
        <input {...register('name')} className='border-2 border-green-500 rounded hover:border-red-500  bg-white' type="text"  placeholder='Name' />
        <input {...register('Email')} className='border-2 border-green-500 rounded hover:border-red-500  bg-white' type="Email"  placeholder='Email' />
        <input {...register('img')} className='border-2 border-green-500 rounded hover:border-red-500  bg-white' type="text"  placeholder='Img Url' /> 
        <input className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-400 cursor-pointer' type="submit" />
    </form>
    </div>
  )
}

export default Form