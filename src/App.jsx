import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";


function App() {
  const {state, dispatch} = useContext(ContextGlobal);

  return (
      <div className="App" style={{backgroundColor: state.background, color: state.font}}>
          <Navbar/>
          <Footer/>
      </div>
  );
}

export default App;
