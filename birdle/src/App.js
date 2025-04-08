import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { PUBLIC_ROUTES } from './constants/general'
import BirdleScreen from './screens/BirdleScreen'
import HeardleScreen from './screens/HeardleScreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PUBLIC_ROUTES.BIRDLE} element={<BirdleScreen />} />
        <Route path={PUBLIC_ROUTES.HEARDLE} element={<HeardleScreen />} />
        <Route path="*" element={<BirdleScreen />} />
      </Routes>
    </Router>
  )
}

export default App
