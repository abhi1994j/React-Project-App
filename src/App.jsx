import { BrowserRouter } from 'react-router-dom'
import Approutes from './routes/Approutes'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <BrowserRouter>
          <Approutes/>
          <ToastContainer/>
      </BrowserRouter>
    </>
  )
}

export default App
