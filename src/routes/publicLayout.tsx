import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/navbar'

function PublicLayout() {
  return (
    <>
      <Navbar/>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  )
}

export default PublicLayout