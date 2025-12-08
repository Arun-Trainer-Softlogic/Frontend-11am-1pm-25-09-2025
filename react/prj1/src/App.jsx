
import AlertBox from './AlertBox.jsx'
import './App.css'

import Counter from './Counter'
import Logintoggle from './Logintoggle.jsx'
import ProfileEditor from './ProfileEditor.jsx'
import Toggler from './Toggler.jsx'
import UserProfile from './userProfile.jsx'

function App() {
 

  return (
    <>
    <Counter/>
    <Toggler/>
    <ProfileEditor/>
    <Logintoggle/>
    <AlertBox/>
    <UserProfile loading={false} user={{ name: "Arun", email: "test@gmail.com" }} />
    
    </>
  )
}

export default App
