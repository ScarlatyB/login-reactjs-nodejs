import { useState } from 'react'
import AppRoutes from './AppRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AppRoutes/> 
    </div>
  )
};

export default App
