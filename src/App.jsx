import './App.css'
import { useState } from 'react'

// style
import './App.css'

// Components
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import UserList from './Components/UserList/UserList'
import NewUserform from './Components/newuser/NewUserForm'

function App() {

  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([])

  const deleteUser = (id) =>{
    setUsers((prev) => {
      return prev.filter((user) =>{
        return user.id !== id
      })
    })
  }

  const closeModal = (e) => {
    if(e.target.className === 'overlayy') setShowModal(false)
    if(e.key === 'Escape') setShowModal(false)
  }

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
    setShowModal(false)
  }

  return (
    <>
      <div onClick={closeModal} onKeyDown={closeModal} className='App'>
        <Navbar userslength={users.length}/>
          <main>
            <div className="no-users">
              {users.length === 0 && <h2>No Users</h2>}
            </div>
          <UserList users={users} deleteUser={deleteUser}/>
          </main>
          {showModal && <NewUserform addUser={addUser}/>}
          <button onClick={() => setShowModal(true)} className='create-user'>Create User</button>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
