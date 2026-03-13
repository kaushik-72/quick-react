import NavBar from './NavBar'

const ReactCss = () => {
  return (
    <div>
    <h1>Inline CSS</h1>
    <div style={{backgroundColor:"orchid",color:"white"}}> 
        style me using inline css
    </div>
    <section className='container'> 
        style me using global css
    </section>
    <NavBar/>
    </div>
  )
}

export default ReactCss