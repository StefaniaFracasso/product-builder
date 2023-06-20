import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Cars from './components/Cars'
import { useSelector} from 'react-redux'
import Colors from './components/Colors'
import Accessories from './components/Accessories'
import Summary from './components/Summary'
import Footer from './components/footer'

function App () {
  const selectedSection = useSelector(state => state.section.selectedSection)
  const selectedCar = useSelector(state => state.car.selectedCar)
  let selectedComponent = <Cars />

  if (selectedCar) {
    switch (selectedSection) {
      case 'colors':
        selectedComponent = <Colors/>
        break
      case 'accessories':
        selectedComponent = <Accessories />
        break
      case 'summary':
        selectedComponent = <Summary />
        break
      default:
        selectedComponent = <Cars />
    }
  }

  return (
    <>
      <Header />
      <div className='product-builder'>{selectedComponent}</div>
      <Footer />
    </>
  )
}

export default App
