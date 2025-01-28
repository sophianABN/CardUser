import './App.css'

function Card({ image, pseudo, email, description, sexe }) {
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
      className="card"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <img 
        src={image} 
        alt="Photo de profil"
        className="profile-image"
      />
      <h2>{pseudo}</h2>
      <h3>{email}</h3>
      <p>{description}</p>
    </article>
  )
}

export default Card 