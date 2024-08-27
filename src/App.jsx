import './App.css'
import NavigationBar from './components/NavigationBar';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <header>
        <div className='logo'>Project Logo</div>
        <NavigationBar />
      </header>
      <Outlet />
    </>
  )
}

export default App
