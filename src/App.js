import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Home from './routes/Home'
import Navigation from './components/navigation/Navigation'
import Authentication from './routes/Authentication/Authentication'
import Shop from './routes/Shop/Shop'
import Checkout from './routes/Checkout/Checkout'

import { checkUserSession } from './store/user/user.action'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
