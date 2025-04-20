import { Provider } from 'react-redux'
import Store from './redux/store'
import Navbar from "./components/Layout/Navbar";
// import CustomCursor from "./components/Ui/CustomCursor";
// import LoadingScreen from "./components/Ui/LoadingScreen";
// import { useState } from "react";
import Router from './router/Routing'

function App() {
    // const [, setIsLoading] = useState(true);
  return (
    <>
    <Provider store={Store}>
        {/* <CustomCursor /> */}
        <Navbar />
        <Router />
        
        {/* <LoadingScreen onFinished={() => setIsLoading(false)}></LoadingScreen> */}
        
    </Provider>
    </>
  )
}

export default App