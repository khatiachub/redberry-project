import { useForm , Controller} from 'react-hook-form'
import { useLocation, useNavigate } from "react-router-dom"
import Header from './Header';
import '../App.css'
import { useEffect, useState } from 'react';
import staricon from '../images/l.png'
import Cv from './Cv';




export default function Step2(){
  const { register, handleSubmit, watch,reset, formState: { errors,control } } = useForm();
  const nav=useNavigate();
  const location=useLocation();
  console.log(location.state)
  const[data,setData]=useState(location.state)
  const[state,setState]=useState({
    exp:'',
    edu:'',
    datestart:'',
    dateend:'',
    textareas:'',
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
      textareas:state.textareas,
    }})
  }
  const onHandleClicks=()=>{
    nav('/Step1',{state:{
      exp:state.exp,
      edu:state.edu,
      datestart:state.datestart,
      dateend:state.dateend,
      textareas:state.textareas,
      position:location.state.position,
      degree:location.state.degree,
      date:location.state.date,
      text:location.state.text
    }})
  }

  const handleChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setState({...state,[name]:value})
  }

  useEffect(() => {
    const data = window.localStorage.getItem('value');
    if ( data !== null ) setState(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.localStorage.setItem('value', JSON.stringify(state));
  }, [state]);


  const exp = register('exp', { required: true, minLength:2})
  const edu= register('edu',{ required:true, minLength:2})
  const datestart=register('datestart',{required:true})
  const dateend=register('dateend',{required:true})
  const textareas=register('textareas',{required:true})

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
              {...exp}
              onChange={(e) => {
                exp.onChange(e); 
                handleChange(e); 
              }}
              />
              <p className='name-criteria'>მინიმუმ 2 სიმბოლო</p>
              <label className='email-label' htmlFor="">დამსაქმებელი</label>
             <input
             value={state.edu}
             name='edu'
             className='input-email'
             placeholder='დამსაქმებელი'
              type="text" 
              {...edu}
              onChange={(e) => {
                edu.onChange(e); 
                handleChange(e); 
              }}
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
                    {...datestart}
                    onChange={(e) => {
                      datestart.onChange(e); 
                      handleChange(e); 
                    }}
                    />
                </div>
                <div className='namediv'>
                    <label className='email-label' htmlFor="">დამთავრების რიცხვი</label>
                    <input 
                    value={state.dateend}
                    name='dateend'
                    type="date" 
                    className='input-name'
                    {...dateend}
                    onChange={(e) => {
                      dateend.onChange(e); 
                      handleChange(e); 
                    }}
                    />
                </div>
              </div>
              <label className='email-label' htmlFor="">აღწერა</label>
              <textarea
              value={state.textareas}
              name='textareas'
               className='textarea text' 
               placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'
               {...textareas}
               onChange={(e) => {
                textareas.onChange(e); 
                handleChange(e); 
              }}
               />
              <div className='line'></div>
              <button type='button' className='exp-button'>მეტი გამოცდილების დამატება</button>
              <div className='buttons-div'>
                 <button onClick={onHandleClicks} type='button' className='button-back'>უკან</button>
                 <button onClick={reset} className='button button-next' type='submit'>შემდეგი</button>
              </div>
           </form>
        </div>
      <div>
        </div>
        <div className="cv-wraper">
       <Cv
         firstName={location.state.firstName}
         lastName={location.state.lastName}
         email={location.state.email}
         number={location.state.number}
         textarea={location.state.textarea}
         edu={state.edu}
         exp={state.exp}
         staricon={staricon}
         datestart={state.datestart}
         dateend={state.dateend}
         textareas={state.textareas}
        />
        {data===null?null:
         <div className='cv-block'>
             <div className='cv-wrap'>
             {location.state.position?<h2 style={{marginTop:50}} className='cv-about'>განათლება</h2>:null}
             <h5 className='cv-number'>{location.state.position} {location.state.degree}</h5>
             <h6 className='cv-dates'>{location.state.date}</h6>
             <p className='cv-paragraph'>{location.state.text}</p>
             </div>
         </div>}
     </div>
  </div>
  )
}