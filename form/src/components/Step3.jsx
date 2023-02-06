import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from "react-router-dom"
import Header from './Header';


export default function Step3(){
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const nav=useNavigate();
  const location=useLocation();

  const[state,setState]=useState({
    position:'',
    degree:'',
    date:'',
    text:''
  })

  const onHandleClick=()=>{
    nav(-1)
  }

  const handleChange=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }

  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE');
    if ( data !== null ) setState(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(state));
  }, [state]);


  const onClick=()=>{
    nav('/Resium',{state:{
      firstName:location.state.firstName,
      lastName:location.state.lastName,
      textarea:location.state.textarea,
      email:location.state.email,
      number:location.state.number,
      exp:location.state.exp,
      edu:location.state.edu,
      datestart:location.state.datestart,
      dateend:location.state.dateend,
      textareas:location.state.textareas,
      position:state.position,
      degree:state.degree,
      date:state.date,
      text:state.text
    }})
  }
  return(
    <div className='form-div'>
    <div className='form-wraper'>
       <Header heading='განათლება' pages='3\3'/>
       <form className='form' action="" onSubmit={handleSubmit(onClick)}>
        <label htmlFor="">სასწავლებელი</label>
         <input
         name='position'
         value={state.position}
         className='input-email'
         placeholder='სასწავლებელი'
          type="text" 
          {...register('position',{onChange:(e)=>handleChange(e)})}
          />
          <p className='name-criteria'>მინიმუმ 2 სიმბოლო</p>
          <div className='input-name-div'>
            <div className='namediv'>
               <label className='email-label' htmlFor="">ხარისხი</label>
               <select  style={{outline:'none',marginTop:8,height:49}} className='input-name' name="degree" value={state.degree} id="" {...register('degree',{onChange:(e)=>handleChange(e)})}>
                <option value="">აირჩიეთ ხარისხი</option>
                <option value="">{}</option>
               </select>
            </div>
            <div className='namediv'>
                <label className='email-label' htmlFor="">დამთავრების რიცხვი</label>
                <input name='date' value={state.date} type="date" className='input-name'{...register('date',{onChange:(e)=>handleChange(e)})}/>
            </div>
          </div>
          <label className='email-label' htmlFor="">განათლების აღწერა</label>
          <textarea name='text' value={state.text} className='textarea text' placeholder='როლი თანამდებობაზე და ზოგადი აღწერა' {...register('text',{onChange:(e)=>handleChange(e)})}></textarea>
          <div className='line'></div>
          <button type='button' className='exp-button'>სხვა სასწავლებლის დამატება</button>
          <div className='buttons-div'>
             <button onClick={onHandleClick} type='button' className='button-back'>უკან</button>
             <button className='button button-next' type='submit'>დასრულება</button>
          </div>
       </form>
    </div>
    <div className='cv-wraper'>
    <div>
        <h1>{location.state.firstName}{location.state.lastName}</h1>
        <h5>{location.state.email}</h5>
        <h5>{location.state.number}</h5>
        <h2></h2>
        <p>{location.state.textarea}</p>
        <h2></h2>
        <h5>{location.state.exp}{location.state.edu}</h5>
        <h6>{location.state.datestart}{location.state.dateend}</h6>
        <p>{location.state.textareas}</p>
        <p>{state.position}</p>
        <p>{state.degree}</p>
        <p>{state.date}</p>
        <p>{state.text}</p>
    </div>
    {/* { imgURL.map(imageSrc => <img style={{width:200,height:200,objectFit:'contain'}} src={imageSrc} />) } */}
    </div>
  </div>
  )
}