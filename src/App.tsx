
import './App.css'
import ClassComponent from './component/ClassComponent'
import Functional from './component/Functional'
import { PrivateRoute } from './routing'

function App() {
  

  return (
    <div className='main-container'>
     <Functional />
     <ClassComponent />
     <PrivateRoute />
        
    </div>
  )
}

export default App
