import { useState } from 'react'
import Like from './Like'
import './App.css'

function Card({ image, pseudo, email, description, sexe }) {
  const [isHovered, setIsHovered] = useState(false)

  const getBackgroundColor = () => {
    switch(sexe) {
      case 'homme':
        return 'lightblue';
      case 'femme':
        return 'pink';
      case 'non-binaire':
        return 'lemonchiffon';
      default:
        return 'white';
    }
  }

  return (
    <article 
      className={`card ${isHovered ? 'border' : ''}`}
      style={{ backgroundColor: getBackgroundColor() }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt="Photo de profil"
        className="profile-image"
      />
      <h2>{pseudo}</h2>
      <h3>{email}</h3>
      <p>{description}</p>
      <Like />
    </article>
  )
}

export default Card 