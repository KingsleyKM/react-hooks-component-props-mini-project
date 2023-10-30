import react from "react";
import Article from "./Article";

function ArticleList(props){
    return(
        <div>
            <main>[
                <Article key="1"/>
                <Article key="2"/>
                <Article key="3"/>
                <Article key="4"/>
                ]</main>
        </div>
    )
}

export default ArticleList