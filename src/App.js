import Home from './routes/Home'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import SignIn from './pages/signIn/SignIn'

const Shop = () => {
  return (
    <div>
      <h1>I am the Shop</h1>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
