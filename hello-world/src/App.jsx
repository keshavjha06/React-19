import './App.css'
import { Welcome } from './Welcome'
import { Button } from './Button'
import { Hello, HelloWithoutJSX } from './Hello'
import { UserProfile } from './UserProfile'
import { ContactForm } from './ContactForm'
import { StyledForm } from './StyledForm'
import { CandidateProfile } from './CandidateProfile'
import { Product } from './Product'

function App() {
  return (
    <div>
      <Product title="Gaming Laptop" price={1299.9} inStock={true} categories={["Electronics", "Computers", "Gaming"]} />
      <Welcome name="John" alias="John Doe" />
      <Welcome name="Jane" alias="Jane Doe" />
      <Welcome name="Jack" alias="Jack Doe" />
      <CandidateProfile />
      <StyledForm />
      <ContactForm />
      <UserProfile />
      <Hello />
      <HelloWithoutJSX />
      <Button />
    </div>
  )
}

export default App
