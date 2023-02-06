import { Link } from "react-router-dom"
import '../App.css'
import logo from '../images/LOGO-40 1.png'
import redlogo from '../images/LOGO-02 3.png'
export default function Home(){
    return(
        <div className="home-wraper">
            <div className="redberry-wraper">
                <img className="redberry-img" src={redlogo} alt="redberry logo" />
            </div>
            <Link className="resium-link" to={'/Step1'}>რეზიუმეს დამატება</Link>
            <img className="home-image" src={logo} alt="logo" />
        </div>
    )
}