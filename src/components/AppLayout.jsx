import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function AppLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-[220px] flex-1 min-h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}
