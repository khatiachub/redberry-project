import { useLocation } from "react-router-dom"
export default function Resium(){
  const location=useLocation();
  return(
      <>
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
             <p>{location.state.position}{location.state.degree}</p>
             <p>{location.state.date}</p>
             <p>{location.state.text}</p>
         </div>
       {/* { imgURL.map(imageSrc => <img style={{width:200,height:200,objectFit:'contain'}} src={imageSrc} />) } */}
       </div>
      </>
  )
}