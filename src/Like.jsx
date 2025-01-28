import { useState } from 'react'
import './Like.css'

function Like() {
  const [like, setLike] = useState(42)

  const handleClick = (event) => {
    event.target.classList.toggle('like')
    
    if(event.target.classList.contains('like')) {
      setLike(like + 1)
    } else {
      setLike(like - 1)
    }
  }

  return (
    <div className="like-container">
      <div 
        className="like-button"
        onClick={event => handleClick(event)}
      ></div>
      <span>{like} likes</span>
    </div>
  )
}

export default Like 