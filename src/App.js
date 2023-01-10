import Home from './routes/Home'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Authentication from './routes/Authentication/Authentication'
import Shop from './routes/Shop/Shop'
import Checkout from './routes/Checkout/Checkout'
import Category from './routes/Category/Category'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />}>
          <Route path=':category' element={<Category />} />
        </Route>
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
