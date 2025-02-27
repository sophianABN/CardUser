import { useState } from 'react'
import Card from './Card'
import './App.css'

const USERS = [
  {
    id: 1,
    image: "/src/assets/avatar1.jpg",
    pseudo: "Marie Dupont",
    email: "marie.dupont@email.com",
    description: "Designer UX/UI passionnée par l'expérience utilisateur. Créative et méthodique.",
    sexe: "femme"
  },
  {
    id: 2,
    image: "/src/assets/avatar2.jpg",
    pseudo: "Thomas Martin",
    email: "thomas.martin@email.com",
    description: "Développeur Backend spécialisé en Python. Amateur de bases de données et d'API REST.",
    sexe: "homme"
  },
  {
    id: 3,
    image: "/src/assets/avatar3.jpg",
    pseudo: "Sophie Bernard",
    email: "sophie.bernard@email.com",
    description: "DevOps engineer avec 4 ans d'expérience. Experte en CI/CD et automatisation.",
    sexe: "non-binaire"
  }
]

function App() {
  const [search, setSearch] = useState('')

  const USERS_LIST = USERS.filter(element => {
    if (!element.pseudo.toLowerCase().includes(search.toLowerCase())) {
      return false
    }
    return true
  })

  return (
    <>
      <h1>
        {USERS.length > 0 
          ? "Liste des Utilisateurs" 
          : "Aucun utilisateur d'inscrit"}
      </h1>
      
      {USERS.length > 0 && (
        <p>Il y a {USERS.length} utilisateurs inscrits !</p>
      )}

      <input 
        type="text"
        placeholder="Rechercher un utilisateur..."
        onChange={event => setSearch(event.target.value)}
        className="search-input"
      />

      <div className="cards-container">
        {USERS_LIST.map(user => (
          <Card 
            key={user.id}
            {...user}
          />
        ))}
      </div>
    </>
  )
}

export default App
