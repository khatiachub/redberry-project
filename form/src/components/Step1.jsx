import { useState,useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import Header from "./Header";


export default function Step1(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const nav=useNavigate();
    const location=useLocation();
    const[value,setValue]=useState({
        firstName:'',
        lastName:'',
        textarea:'',
        email:'',
        number:''
})
    const handleChange=(e)=>{
        console.log(e.target.value)
        const name=e.target.name
        const val=e.target.value
        setValue({...value,[name]:val})
    }
    const onClick=()=>{
        nav('/step2',{state:{
            firstName:value.firstName,
            lastName:value.lastName,
            textarea:value.textarea,
            email:value.email,
            number:value.number
        }})
    }
    useEffect(() => {
        const data = window.localStorage.getItem('MY_APP_STATE');
        if ( data !== null ) setValue(JSON.parse(data));
      }, []);
    useEffect(() => {
        window.localStorage.setItem('MY_APP_STATE', JSON.stringify(value));
      }, [value]);

    return(
        <div className="form-div">
            {/* <div className="form-background"> */}
            <div className="form-wraper">
            <Header heading='პირადი ინფო' pages='1\3'/>
            <form className="form" onSubmit={handleSubmit(onClick)}>
                <div className="input-name-div">
                <div className="namediv">
                <label>სახელი</label>
                <input
                placeholder="ანზორ"
                className="input-name"
                name="firstName"
                defaultValue={value.firstName}
                 type="text" 
                 {...register('firstName',{onChange:(e)=>handleChange(e)})}
                 />
                 <p className="name-criteria">მინიმუმ 2 ასო, ქართული ასოები</p>
                 </div>
                 <div className="namediv">
                <label>გვარი</label>
                <input 
                placeholder="მუმლაძე"
                className="input-name"
                name="lastName"
                value={value.lastName}
                type="text"
                {...register('lastName',{onChange:(e)=>handleChange(e)})}
                />
                <p className="name-criteria">მინიმუმ 2 ასო, ქართული ასოები</p>
                </div>
                </div>
                <div className="image-input-div">
                <label className="image-label">პირადი ფოტოს ატვირთვა</label>
                <input 
                type="file"
                name="image" 
                {...register('image',{onChange:(e)=>handleChange(e)})}
                />
                </div>
                <img 
                src='' 
                alt="" 
                />
                <label className="text-label">ჩემს შესახებ (არასავალდებულო)</label>
                <textarea 
                className="textarea"
                placeholder="ზოგადი ინფო შენს შესახებ"
                name="textarea"
                value={value.textarea}
                {...register('textarea',{onChange:(e)=>handleChange(e)})}
                />
                <label className="email-label">ელ-ფოსტა</label>
                <input 
                placeholder="anzorr666@redberry.ge"
                className="input-email"
                type="email"
                name="email" 
                // value={value.email}
                {...register('email',{onChange:(e)=>handleChange(e)})}
                />
                <p className="name-criteria">უნდა მთავრდებოდეს @redberry.ge-ით</p>
                <label className="number-label">მობილურის ნომერი</label>
                <input 
                placeholder="+995 551 12 34 56"
                className="input-email"
                type="number" 
                name="number"
                // value={value.number}
                {...register('number',{onChange:(e)=>handleChange(e)})}
                />
                <p className="name-criteria">უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
                <button
                type="submit"
                className="button">შემდეგი</button>
            </form>
            {/* </div> */}
            </div>
            {/* <div className="cv-wraper"> */}
               {/* <li>{value.firstName}</li> */}
               {/* <li>{value.lastName}</li> */}
               {/* <li>{value.textarea}</li> */}
               {/* <li>{value.email}</li> */}
               {/* <li>{value.number}</li> */}
            {/* </div> */}
        </div>
    )
}




