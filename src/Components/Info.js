
const Info = (props) =>{
    return(
        <div className={props.propertyname}>
            
            <h3>{props.name}</h3>
            {props.children}
            <p>
               {props.description}
               
            </p>
        </div>
    )
}


export default Info