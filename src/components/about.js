import react from "react";

function About(props){
    console.log(props)
    return(
        <div>
            
            <aside>
                <img src={props.image} alt="blog logo" placeholder=""/>
                <p>{props.text}</p>
            </aside>
        </div>
    )
    
}

export default About
