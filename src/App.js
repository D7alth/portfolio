import './App.css';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Particles from 'react-particles-js'
import AboutMe from './components/AboutMe'
function App() {
  return (
    <>
    <Particles
    params={{
        particles:{
          number:{
            value: 20,
            density:{
              enabled: true,
              value_area:200
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width:11,
              color:"#dc143c"
            }
          }
        }
    }}
    />
  <NavBar/>
  <Header/>
  <AboutMe/>
  </>
  );
}

export default App;
