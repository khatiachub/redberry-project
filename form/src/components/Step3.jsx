import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from "react-router-dom"
import Header from './Header';

export default function Step3(){
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const nav=useNavigate();
  const location=useLocation();
  console.log(location)
  const onClick=()=>{
    nav('/Resium',{state:{
      firstName:location.state.firstName,
      lastName:location.state.lastName,
      textarea:location.state.textarea,
      email:location.state.email,
      number:location.state.number
    }})
  }
  return(
      <div className='form-wraper'>
      <Header heading='განათლება' pages='3\3'/>
      <form action="" onSubmit={handleSubmit(onClick)}>
        <input type="text" {...register('date')}/>
        <input type="text" {...register('dates')}/>
        <button type='submit'>შემდეგი</button>
      </form>
      </div>
  )
}