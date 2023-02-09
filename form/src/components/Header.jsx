import { useNavigate } from "react-router-dom"


export default function Header(props){
    const nav=useNavigate()
    const handleClick=()=>{
        nav('/');
        localStorage.removeItem('value')

    }
    return(
        <div className='wraper'>
           <div onClick={handleClick} className='back-arrow'>
                <i class="fa-solid fa-chevron-left"></i>
           </div>
           <div className='overlay'>
              <h2>{props.heading}</h2>
              <h5>{props.pages}</h5>
           </div>
        </div>
    )
}