import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./common/Header"
import Body from "./common/Body"
import Footer from "./common/Footer"

function App() {
const display=true

  return (
    <div style={{marginTop:"2rem"}}>
      {/* {display  ? <Header/> : null} */}
      <Body />
      {/* <Footer /> */}
    </div>
  )
}

export default App
