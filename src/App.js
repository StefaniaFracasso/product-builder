import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Cars from './components/Cars'
import Footer from './components/footer'
import { useSelector, useDispatch } from 'react-redux'
import Colors from './components/Colors'
import Accessories from './components/Accessories'
import Summary from './components/Summary'

function App () {
  const selectedSection = useSelector(state => state.section.selectedSection)
  const selectedCar = useSelector(state => state.car.selectedCar)
  const dispatch = useDispatch();
  let selectedComponent = <Cars />

  if (selectedCar) {
    switch (selectedSection) {
      case 'colors':
        selectedComponent = <Colors/>
        break
      case 'accessories':
        selectedComponent = <Accessories/>
        break
      case 'summary':
        selectedComponent = <Summary/>
        break
      default:
        selectedComponent = <Cars />
    }
  } else if (selectedSection !== 'models') {
    alert('Please select a car')
    // TODO: Corregere bug blocco cambio pagina dopo alert
    dispatch({
      type: 'SELECT_SECTION',
      payload: "models",
    });
  }

  return (
    <div className='product-builder'>
      <Header />
      {selectedComponent}
      <Footer />
    </div>
  )
}

export default App
