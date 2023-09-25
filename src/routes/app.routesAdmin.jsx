import { Routes, Route } from 'react-router-dom';

import { HomeAdmin } from '../pages/HomeAdmin'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'
import { Details } from '../pages/Details'

export function AppRoutesAdmin() {
  return (
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/newdish" element={<NewDish />} />
      <Route path="/editdish" element={<EditDish />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  )
}