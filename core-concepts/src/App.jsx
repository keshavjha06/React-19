import './App.css'
import { Welcome } from './Welcome'
import { Button } from './Button'
import { Hello, HelloWithoutJSX } from './Hello'
import { UserProfile } from './UserProfile'
import { ContactForm } from './ContactForm'
import { StyledForm } from './StyledForm'
import { CandidateProfile } from './CandidateProfile'
import { Product } from './Product'
import { Greeting } from './Greeting'
import { CardWrapper } from './CardWrapper'
import { UserDetails } from './UserDetails'
import { ProductList } from './ProductList'
import { NameList } from './NameList'
import { TodoList } from './TodoList'
import { Alert } from './Alert'
import { NewButton } from './NewButton'
import { CustomButton } from './CustomButton'
import { Contact } from './Contact'
import { Newsletter } from './Newsletter'
import { Menu } from './Menu'

function App() {
  return (
    <div>
      <Menu />
      <Contact />
      <Newsletter />
      <CustomButton text="Click Me" />
      <CustomButton text="Bookmark" />
      <Alert>Your changes have been saved!</Alert>
      <Alert type="error">Something went wrong!</Alert>
      <NewButton />
      <TodoList />
      <NameList />
      <ProductList />
      <UserDetails
        name="John Doe"
        isOnline={true}
        isPremium={true}
        isNewUser={true}
        role='admin'
      />
      <UserDetails
        name="Jane Doe"
        isOnline={true}
        hideOffline={true}
        role='vip'
      />
      <CardWrapper title="User Profile">
        <p>John Doe</p>
        <p>batman@jl.com</p>
        <button>Edit Profile</button>
      </CardWrapper>
      <Greeting name="John" message="Good Morning" />
      <Greeting name="Jane" />
      <Greeting message="Welcome" />
      <Greeting />
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
