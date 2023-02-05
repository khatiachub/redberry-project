import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from "react-router-dom"
import Header from './Header';

export default function Step2(){
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const nav=useNavigate();
  const location=useLocation();
  const onClick=()=>{
    nav('/Step3',{state:{
      firstName:location.state.firstName,
      lastName:location.state.lastName,
      textarea:location.state.textarea,
      email:location.state.email,
      number:location.state.number
    }})
  }
  return(
      <div className='form-wraper'>
      <Header heading='გამოცდილება' pages='2\3'/>
      <form action="" onSubmit={handleSubmit(onClick)}>
        <input type="text" {...register('exp')}/>
        <input type="text" {...register('edu')}/>
        <button type='submit'>შემდეგი</button>
      </form>
      </div>
  )
}