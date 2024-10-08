import './App.scss';
import { Routes, Route }from 'react-router-dom';
import About from './components/About'
import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import ProjectsPage from './components/Projects';  // Import your Projects component

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="/projects" component={ProjectsPage} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
