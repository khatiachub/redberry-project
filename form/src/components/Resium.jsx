import { useLocation } from "react-router-dom"
export default function Resium(){
  const location=useLocation();
  return(
      <>
        <h1>{location.state.firstName}</h1>
        <h2>{location.state.lastName}</h2>
        <h2>{location.state.email}</h2>
      </>
  )
}