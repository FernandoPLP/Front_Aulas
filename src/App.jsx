import './App.css'
import Componente1 from './components/componente1'
import Componente2 from './components/Compenente2'

function App() {

  const paragr = {
    color: 'blue',
    textAlign: 'Justify',
    fontSize: '1.5em'

  }

  return (
    <>
      <div className='div-app'>
        <h1 style={{color: 'red', fontSize: '3em'}}>Introdução React</h1>
      </div>
        <p style={paragr}>Primeiro teste</p> 
        <Componente1/>
        <Componente2/>
    </>
    
  )
}

export default App
