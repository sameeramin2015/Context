
import {React, useEffect, useState} from 'react';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import Hompage from './pages/Home';
import Contact from './pages/Contact';
import {Database} from './context/index'

function App() {
  //https://jsonplaceholder.typicode.com/posts
  const [state, setState] = useState([1,2,3,4,5,6])
  const [posts, setPosts] = useState([])
  const saySomething = () => {
    console.log('this is a function')
  }
  const onlyString ="Hello friend";
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=> res.json()) /* convert data to json */
      .then(data=>{
        // received data here
        setPosts(data) // setPost is a variable
      })
      .catch(err=>{
        console.log(err)
      })
  }, [])
  return (
    <Database.Provider value={[state, saySomething, onlyString, posts]}>
    <BrowserRouter>
    <ul>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/contact'}>Contact</Link></li>
    </ul>
    <Routes>
      <Route path='/' element={<Hompage />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </Database.Provider>
  );
}

export default App;