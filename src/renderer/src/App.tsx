
import { HashRouter as Router, Route, Routes } from 'react-router'
import Home from "./pages/Home";
import About from "./pages/About";

import Background from "@renderer/components/Background";

function App(): React.JSX.Element {

  return (
    <div className='bg-white dark:bg-gray-900 min-h-screen'>
      <Background />
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}


export default App
