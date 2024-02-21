import Home from "./layouts/Home"
import "./App.css"
import { VisibilityProvider } from "./context/VisibilityProvider";

function App() {

  return (
    <>
    <VisibilityProvider>
      <Home />
    </VisibilityProvider>
    </>
  );
}

export default App;
