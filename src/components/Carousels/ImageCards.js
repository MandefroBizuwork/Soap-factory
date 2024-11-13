import React from 'react'

const ImageCards = ({image,title,description}) => {
  return (
    <div class="card shadow" >
    <img src={image}  class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
      </div>
  )
}

export default ImageCards
