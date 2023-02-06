import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from "react-router-dom"
import Header from './Header';
import '../App.css'
import { useEffect, useState } from 'react';

export default function Step2(){
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const nav=useNavigate();
  const location=useLocation();
  const[state,setState]=useState({
    exp:'',
    edu:'',
    datestart:'',
    dateend:'',
    textareas:''
  })


  const onClick=()=>{
    nav('/Step3',{state:{
      firstName:location.state.firstName,
      lastName:location.state.lastName,
      textarea:location.state.textarea,
      email:location.state.email,
      number:location.state.number,
      exp:state.exp,
      edu:state.edu,
      datestart:state.datestart,
      dateend:state.dateend,
      textareas:state.textareas
    }})
  }

  const onHandleClick=()=>{
    nav(-1)
  }

  const handleChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setState({...state,[name]:value})
  }

  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE');
    if ( data !== null ) setState(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(state));
  }, [state]);

  return(
      <div className='form-div'>
        <div className='form-wraper'>
           <Header heading='გამოცდილება' pages='2\3'/>
           <form className='form' action="" onSubmit={handleSubmit(onClick)}>
            <label htmlFor="">თანამდებობა</label>
             <input
             value={state.exp}
             name='exp'
             className='input-email'
             placeholder='დეველოპერი, დიზაინერი, ა.შ.'
              type="text" 
              {...register('exp',{onChange:(e)=>handleChange(e)})}
              />
              <p className='name-criteria'>მინიმუმ 2 სიმბოლო</p>
              <label className='email-label' htmlFor="">დამსაქმებელი</label>
             <input
             value={state.edu}
             name='edu'
             className='input-email'
             placeholder='დამსაქმებელი'
              type="text" 
              {...register('edu',{onChange:(e)=>handleChange(e)})}
              />
              <p className='name-criteria'>მინიმუმ 2 სიმბოლო</p>
              <div className='input-name-div'>
                <div className='namediv'>
                   <label className='email-label' htmlFor="">დაწყების რიცხვი</label>
                   <input
                   value={state.datestart}
                   name='datestart'
                    type="date" 
                    className='input-name'
                    {...register('datestart',{onChange:(e)=>handleChange(e)})}
                    />
                </div>
                <div className='namediv'>
                    <label className='email-label' htmlFor="">დამთავრების რიცხვი</label>
                    <input 
                    value={state.dateend}
                    name='dateend'
                    type="date" 
                    className='input-name'
                    {...register('dateend',{onChange:(e)=>handleChange(e)})}
                    />
                </div>
              </div>
              <label className='email-label' htmlFor="">აღწერა</label>
              <textarea
              value={state.textareas}
              name='textareas'
               className='textarea text' 
               placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
               {...register('textareas',{onChange:(e)=>handleChange(e)})}
               />
              <div className='line'></div>
              <button type='button' className='exp-button'>მეტი გამოცდილების დამატება</button>
              <div className='buttons-div'>
                 <button onClick={onHandleClick} type='button' className='button-back'>უკან</button>
                 <button className='button button-next' type='submit'>შემდეგი</button>
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
            <h5>{state.exp}{state.edu}</h5>
            <h6>{state.datestart}{state.dateend}</h6>
            <p>{state.textareas}</p>
        </div>
        {/* { imgURL.map(imageSrc => <img style={{width:200,height:200,objectFit:'contain'}} src={imageSrc} />) } */}
        </div>
      </div>
  )
}