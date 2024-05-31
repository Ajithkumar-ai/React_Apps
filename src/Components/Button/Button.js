import './Button.css'

export default function Button(props)
{
 return(
    <div>
    <button className="numberbutton" onClick={()=>{props.onClick(props.number);}}>{props.number}</button>
    </div>
 );
}