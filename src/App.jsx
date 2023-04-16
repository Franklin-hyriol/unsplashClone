import { useState } from 'react'
import InfiniteScroll from './Components/InfiniteScroll/InfiniteScroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <InfiniteScroll />
    </div>
  )
}

export default App;
