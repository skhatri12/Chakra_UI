import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import BoxExample from "./Components/BoxExample";
import BadgeExample from "./Components/BadgeExample";
import CenterExample from "./Components/CenterExample";
import ContainerExample from "./Components/ContainerExample";
import FlexExample from "./Components/FlexExample";
import GridExample from "./Components/GridExample";
import StackExample from "./Components/StackExample";
import WrapExample from "./Components/WrapExample";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/box" element={<BoxExample />} />
        <Route path="/badge" element={<BadgeExample />} />
        <Route path="/center" element={<CenterExample />} />
        <Route path="/container" element={<ContainerExample />} />
        <Route path="/flex" element={<FlexExample />} />
        <Route path="/grid" element={<GridExample />} />
        <Route path="/stack" element={<StackExample />} />
        <Route path="/wrap" element={<WrapExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
