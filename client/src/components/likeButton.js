import React from 'react';

const LikeButton = ({searchId, likes}) => {

  let likeButton = <button data-id={searchId}> </button>

  return (
    {likeButton}
  )
}

export default LikeButton