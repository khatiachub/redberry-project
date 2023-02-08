import { useLocation,useNavigate } from "react-router-dom"
import staricon from '../images/l.png'
import Cv from "./Cv";


export default function Resium(){
  const location=useLocation();
  const nav=useNavigate()
  const handleClick=()=>{
      nav('/');
      localStorage.removeItem('value')
     //  localStorage.removeItem('val')
     //  localStorage.removeItem('state')
  }

  return(
      <>
      <div onClick={handleClick} className='back-arrow back-arrow-resium'>
         <i class="fa-solid fa-chevron-left"></i>
      </div>
         <div className="cv-wraper cv-wraper-resium" >
                
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
                  position={location.state.position}
                  degree={location.state.degree}
                  date={location.state.date}
                  text={location.state.text}
                  />
           </div>
      </>
  )
}