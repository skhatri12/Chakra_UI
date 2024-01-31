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
import ButtonExample from "./Components/ButtonExample";
import CheckBoxEg from "./Components/CheckBoxEg";

import EditableEg from "./Components/EditableEg";
import FormExample from "./Components/FormExample";
import InputExample from "./Components/InputExample";
import PinInputExample from "./Components/PinInputExample";
import RangeSliderEg from "./Components/RangeSliderEg";
import SwitchExample from "./Components/SwitchExample";
import TextExample from "./Components/TextExample";
import CardExample from "./Components/CardExample";
import DividerListExample from "./Components/DividerListExample";
import StatExample from "./Components/StatExample";
import TableExample from "./Components/TableExample";
import TagExample from "./Components/TagExample";
import TabsExample from "./Components/TabsExample";
import AvatarExample from "./Components/AvatarExample";
import ShowHideExample from "./Components/ShowHideExample";
import AlertExample from "./Components/AlertExample";
import ProgessSpinner from "./Components/ProgessSpinner";
import CustomTheme from "./Components/CustomTheme";
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
        <Route path="/button" element={<ButtonExample />} />
        <Route path="/checkbox" element={<CheckBoxEg/>} />
        <Route path="/editable" element={<EditableEg/>} />
        <Route path="/form" element={<FormExample/>} />
        <Route path="/input" element={<InputExample/>} />
        <Route path="/pininput" element={<PinInputExample/>} />
        <Route path="/rangeslider" element={<RangeSliderEg/>} />
        <Route path="/switch" element={<SwitchExample/>} />
        <Route path="/text" element={<TextExample/>} />
        <Route path="/card" element={<CardExample/>} />
        <Route path="/list" element={<DividerListExample/>} />
        <Route path="/stat" element={<StatExample/>} />
        <Route path="/table" element={<TableExample/>} />
        <Route path="/tag" element={<TagExample/>} />
        <Route path="/tabs" element={<TabsExample/>} />
        <Route path="/avatar" element={<AvatarExample/>} />
        <Route path="/showhide" element={<ShowHideExample/>} />
        <Route path="/alert" element={<AlertExample/>} />
        <Route path="/progessspinner" element={<ProgessSpinner/>} />
        <Route path="/customtheme" element={<CustomTheme/>} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
