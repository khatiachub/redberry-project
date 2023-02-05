export default function Header(props){
    return(
        <div className='wraper'>
           <div className='back-arrow'>
                <i class="fa-solid fa-chevron-left"></i>
           </div>
           <div className='overlay'>
              <h2>{props.heading}</h2>
              <h5>{props.pages}</h5>
           </div>
        </div>
    )
}