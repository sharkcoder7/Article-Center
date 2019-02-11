import React from 'react';


const Article = (props) => {
  return(
    <div className="article">
    <h3> <a className="article-link" href={props.url}> {props.title}</a>  </h3>
    </div>
  )
}


export default Article;