import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from "react-router-dom"
import Header from './Header';
import Cv from './Cv';
import staricon from '../images/l.png'




export default function Step3(){
  const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  const nav=useNavigate();
  const location=useLocation();

  const[state,setState]=useState({
    position:'',
    degree:'',
    date:'',
    text:''
  })
const[value,setValue]=useState('')
  const onHandleClicks=()=>{
    nav('/step2',{state:{
      firstName:location.state.firstName,
      lastName:location.state.lastName,
      textarea:location.state.textarea,
      email:location.state.email,
      number:location.state.number,
      position:state.position,
      degree:state.degree,
      date:state.date,
      text:state.text
    }})
  }

  const handleChange=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }

  useEffect(() => {
    const data = window.localStorage.getItem('value');
    if ( data !== null ) setState(JSON.parse(data));
  }, []);
  useEffect(() => {
    window.localStorage.setItem('value', JSON.stringify(state));
  }, [state]);

const[data,setData]=useState([])
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
    localStorage.removeItem('value');
  }
  useEffect(() => {
    fetch('https://resume.redberryinternship.ge/api/degrees')
        .then(response => response.json())
        .then((data)=>{
          setData(data)
        });
}, []);

const position = register('position', { required: true, minLength:2})
const degree= register('degree',{ required:true})
const date=register('date',{required:true})
const text=register('text',{required:true})
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
          {...position}
          onChange={(e) => {
            position.onChange(e); 
            handleChange(e); 
          }}
          />
          <p 
          className='name-criteria'>
            მინიმუმ 2 სიმბოლო
            </p>
          <div
           className='input-name-div'>
            <div
            className='namediv'>
            <label
            className='email-label'
             htmlFor="">ხარისხი</label>
            <select
            style={{outline:'none',marginTop:8,height:49}} 
            className='input-name' 
            name="degree" 
            value={state.degree} 
            id="" 
            {...degree}
            onChange={(e) => {
              degree.onChange(e); 
              handleChange(e); 
            }}
            >
            <option 
            value="">აირჩიეთ ხარისხი
            </option>
              {data.map((element)=>{
                return(
                  <>
                    <option 
                    value={element.title}>
                    {element.title}
                    </option>
                  </>
                )
              })}
               </select>
            </div>
            <div
             className='namediv'>
                <label
                className='email-label' 
                htmlFor="">დამთავრების რიცხვი
                </label>
                <input 
                name='date' 
                value={state.date}
                type="date"
                className='input-name'
                {...date}
                onChange={(e) => {
                  date.onChange(e); 
                  handleChange(e); 
                }}
                  />
            </div>
          </div>
          <label
           className='email-label' 
           htmlFor="">განათლების აღწერა
           </label>
          <textarea
          {...text}
          onChange={(e) => {
            text.onChange(e); 
            handleChange(e); 
          }}
           name='text' 
           value={state.text} 
           className='textarea text' 
           placeholder='როლი თანამდებობაზე და ზოგადი აღწერა'>
           </textarea>
          <div className='line'>
          </div>
          <button
           type='button' 
           className='exp-button'>სხვა სასწავლებლის დამატება
           </button>
          <div 
          className='buttons-div'>
             <button 
             onClick={onHandleClicks} 
             type='button' 
             className='button-back'>უკან
             </button>
             <button 
              onClick={reset}
             className='button button-next' 
             type='submit'>დასრულება
             </button>
          </div>
       </form>
    </div>
       <div 
       className="cv-wraper">
        <Cv
         firstName={location.state.firstName}
         lastName={location.state.lastName}
         email={location.state.email}
         number={location.state.number}
         textarea={location.state.textarea}
         edu={location.state.edu}
         exp={location.state.exp}
         staricon={staricon}
         datestart={location.state.datestart}
         dateend={location.state.dateend}
         textareas={location.state.textareas}
         position={state.position}
         degree={state.degree}
         date={state.date}
         text={state.text}
        />
        </div>
     </div>
  )
}