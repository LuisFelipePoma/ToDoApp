import { Outlet } from 'react-router-dom'

export default function HomeLayout () {
  return (
    <>
      <header>
        <nav>Navbar Pox</nav>
      </header>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  )
}
