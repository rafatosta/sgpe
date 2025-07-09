
import { HashRouter as Router, Route, Routes } from 'react-router'
import Home from "./pages/Home";
import About from "./pages/About";


function App(): React.JSX.Element {

  return (
    <div>
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
