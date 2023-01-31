import React from "react";


function Article({key, title, date, preview}){
    return(
            <article key={key}>
                <h3>{title}</h3>
                {date ? <small>{date}</small> : 'January 1, 1970'}
                <p>{preview}</p>
            </article>
    )
}

export default Article;