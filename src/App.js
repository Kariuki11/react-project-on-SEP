import './App.scss';
import { Routes, Route }from 'react-router-dom';
//import About from './components/About'
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
