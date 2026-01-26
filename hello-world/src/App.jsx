import './App.css'
import { Welcome } from './Welcome'
import { Button } from './Button'
import { Hello, HelloWithoutJSX } from './Hello'
import { UserProfile } from './assets/UserProfile'
import { ContactForm } from './assets/ContactForm'
import { StyledForm } from './assets/StyledForm'
import { CandidateProfile } from './assets/CandidateProfile'

function App() {
  return (
    <div>
      <CandidateProfile />
      <StyledForm />
      <ContactForm />
      <UserProfile />
      <Hello />
      <HelloWithoutJSX />
      <Welcome />
      <Button />
    </div>
  )
}

export default App
