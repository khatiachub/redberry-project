import { useState,useEffect} from "react"
import React from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { useForm,Controller,useController } from 'react-hook-form'
import Header from "./Header";
import redicon from '../images/v.png'
import greenicon from '../images/i.png'
import staricon from '../images/l.png'
import Cv from "./Cv";

// import Storage from "./Storage";

export default function Step1(){
    const { register, handleSubmit,reset,control,trigger, formState: { errors },setValue,setFocus } = useForm({mode: "all"});
    const nav=useNavigate();
    const [image, setImage] = useState([]);
    const [imgURL, setImgURL] = useState([]);
    const location=useLocation()
    console.log(location);
    const[data,setData]=useState(location.state)
     const[value,setValues]=useState({
        firstName:'',
        lastName:'',
        textarea:'',
        email:'',
        number:'',
        image:'',
})
const [isValid, setIsValid] = useState(true);
    const handleChange=(e)=>{
        const name=e.target.name
        const val=e.target.value
        setValues({...value,[name]:val}
        )
        setImage([...e.target.files])
        setIsValid(value.length>2);
    }
    useEffect(()=>{
        if(image.length<1)return;
        const newImg=[];
        image.forEach(item=>newImg.push(URL.createObjectURL(item)
        ))
        setImgURL(newImg)
    },[image])

    const onClick=(data)=>{
        nav('/step2',{state:{
            firstName:value.firstName,
            lastName:value.lastName,
            textarea:value.textarea,
            email:value.email,
            number:value.number,
            position:location.state.position,
            degree:location.state.degree,
            date:location.state.date,
            text:location.state.text
        }})
    }

    useEffect(() => {
        const data = window.localStorage.getItem('value');
        if ( data !== null ) setValues(JSON.parse(data));
      }, []);
    useEffect(() => {
        window.localStorage.setItem('value', JSON.stringify(value));
      }, [value]);



      const firstName = register('firstName', { required: true,pattern: /^[ა-ჰა-ჰ]+$/i, minLength:2})
      const lastName= register('lastName',{pattern: /^[ა-ჰა-ჰ]+$/i, required:true, minLength:2})
      const images=register('image',{required:true})
      const number=register('number',{required:true,pattern:/^(\+?995)?(79\d{7}|5\d{8})$/})
      const email=register('email',{required:true,pattern:/^[A-Za-z0-9._%+-]+@redberry\.ge$/})
    return(
        <div className="form-div">
            <div className="form-wraper">
            <Header heading='პირადი ინფო' pages='1\3'/>
            <form className="form" onSubmit={handleSubmit(onClick)}>
                <div className="input-name-div">
                <div className="namediv">
                <label>სახელი</label>
                <input
                 name="firstName"
                 placeholder="ანზორ"
                 className={`input-name ${isValid?'green':'red'}`}
                 value={value.firstName}
                 type="text" 
                 {...firstName}
                 onChange={(e) => {
                     firstName.onChange(e); 
                     handleChange(e); 
                   }}
                 />
                 <img className={`red-icon ${errors.firstName?'red-icon-block':'red-icon'}`} src={redicon} alt="red icon"/>
                 
                 <p className="name-criteria">მინიმუმ 2 ასო, ქართული ასოები</p>
                 </div>
                 <div className="namediv">
                <label>გვარი</label>
                <input 
                placeholder="მუმლაძე"
                className={`input-name ${errors.lastName?'red':'input-name'}`}
                name="lastName"
                value={value.lastName}
                type="text"
                {...lastName}
                onChange={(e) => {
                    lastName.onChange(e);
                    handleChange(e); 
                  }}
                  setFocus

                />
                <img className={`red-icon ${errors.lastName?'red-icon-block':'red-icon'}`} src={redicon} alt="red icon"/>
                <p className="name-criteria">მინიმუმ 2 ასო, ქართული ასოები</p>
                </div>
                </div>
                <div className="image-input-div">
                <label className="image-label">პირადი ფოტოს ატვირთვა</label>
                <div onClick={()=>document.querySelector('.image-input').click()}className={`image-button ${errors.image?'redborder':'image-button'}`} >ატვირთვა</div>
                <input 
                className="image-input"
                type="file"
                name="image" 
                accept="image/*"
                {...images}
                onChange={(e) => {
                    images.onChange(e);
                    handleChange(e); 
                  }}
                />
                </div>
                <label className="text-label">ჩემს შესახებ (არასავალდებულო)</label>
                <textarea 
                className="textarea"
                placeholder="ზოგადი ინფო შენს შესახებ"
                name="textarea"
                value={value.textarea}
                {...register('textarea',{onChange:(e)=>handleChange(e)})}
                />
                <label className="email-label">ელ-ფოსტა</label>
                <div className="icon-wraper">
                <input 
                placeholder="anzorr666@redberry.ge"
                className={`${errors.email?'red-border':'input-email'}`}
                type="email"
                name="email" 
                value={value.email}
                {...email}
                onChange={(e) => {
                    email.onChange(e); 
                    handleChange(e); 
                  }}
                />
                <img className={`red-icon ${errors.email?'red-icon-blocks':'red-icon'}`} src={redicon} alt="red icon"/>
                </div>
                <p className="name-criteria">უნდა მთავრდებოდეს @redberry.ge-ით</p>
                <label className="number-label">მობილურის ნომერი</label>
                <div className="icon-wraper">
                <input 
                placeholder="+995 551 12 34 56"
                className={` ${errors.number?'red-border':'input-email'}`}
                type="number" 
                name="number"
                value={value.number}
                {...number}
                onChange={(e) => {
                    number.onChange(e); 
                    handleChange(e); 
                  }}
                />
                <img className={`red-icon ${errors.number?'red-icon-blocks':'red-icon'}`} src={redicon} alt="red icon"/>
                </div>
                <p className="name-criteria">უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
                <button
                onClick={reset}
                type="submit"
                className="button">შემდეგი</button>
            </form>
            </div>
            <div className="cv-wraper">
                <Cv
                  firstName={value.firstName}
                  lastName={value.lastName}
                  email={value.email}
                  number={value.number}
                  textarea={value.textarea}
                  staricon={staricon}
                  // imgURL={imgURL}
                  // location={location.state}
                  />
                    {data===null?null:
                   <>
                  <div className='cv-block'>
                    <div className='cv-wrap'>
                         {location.state.edu?<h2 style={{marginTop:50}} className='cv-about'>გამოცდილება</h2>:null}
                         <h5 className='cv-number'>{location.state.edu} {location.state.exp}</h5>
                         <h6 className='cv-dates'>{location.state.datestart} {location.state.dateend}</h6>
                         <p className='cv-paragraph'>{location.state.textareas}</p>
                    </div>
                   </div>
                   <div className='cv-block'>
                      <div className='cv-wrap'>
                      {location.state.position?<h2 style={{marginTop:50}} className='cv-about'>განათლება</h2>:null}
                      <h5 className='cv-number'>{location.state.position} {location.state.degree}</h5>
                      <h6 className='cv-dates'>{location.state.date}</h6>
                      <p className='cv-paragraph'>{location.state.text}</p>
                      </div>
                   </div>
                   </>}
              </div>
            </div>
    )
}




