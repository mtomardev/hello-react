//import "../index.css"

const Navbar = (props) =>{
    return (
        
        <nav className="navbar">
            <h1>{props.name}</h1>
            {/* {props.children} */}
            <div className="links">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Skills</a>
                <a href="">Qualification</a>
                <a href="">Experience</a>
                <a href="">Project</a>
            </div>
        </nav>
        
    )
}

export default Navbar