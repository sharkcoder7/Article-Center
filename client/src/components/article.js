import React from 'react';


const Article = (props) => {
  return(
    <div>
    <h3> <a href={props.url}> {props.title}</a>  </h3>
    </div>
  )
}


export default Article;