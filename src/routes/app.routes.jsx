import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home'
//import { HomeAdmin } from './pages/HomeAdmin'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'
import { Details } from '../pages/Details'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newdish" element={<NewDish />} />
      <Route path="/editdish" element={<EditDish />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  )
}