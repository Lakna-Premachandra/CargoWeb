import './App.css'
import Footer from './components/common/Footer'
import Header from './components/common/Header'
import BestShipping from './components/sections/BestShipping'
import ChooseUs from './components/sections/ChooseUs'
import Client from './components/sections/Client'
import News from './components/sections/News'
import Services from './components/sections/Services'
import Stats from './components/sections/Stats'
import Welcome from './components/sections/Welcome'

function App() {

  return (
    <>
    <div className='max-w-[1450px] m-auto w-full '>
      <Header />
      <BestShipping />
      <Welcome />
      <Services />
      <Stats/>
      <ChooseUs/>
      <Client/>
      <News/>
    </div>
    <Footer/>
    </>
  )
}

export default App
