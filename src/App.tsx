import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Main from './layouts/Main'
import './styles/mainaside_style.css'
import Carrito from './components/Carrito'
function App() {

  return (
    <>
      <Header />
      <Carrito/>
      <div className='container_main'>
        <Main />
      </div>
      <Footer />
    </>
  )

}

export default App
