import react from "react";

function Article(props){
    return(
        <div>
            <article>
                <h3> Title : {props.title}</h3>
                <small> Date : {props.date}</small>
                <p>Preview : {props.preview}</p>
            </article>
        </div>
    )
}

export default Article