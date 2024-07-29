import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayCard from "./pages/DisplayCard";
import DisplayContainer from "./pages/DisplayContainer";
import DisplayContext from "./pages/DisplayContext";
import DisplayCouter from "./pages/DisplayCouter";
import DisplayEffects from "./pages/DisplayEffects";
import DisplayList from "./pages/DisplayList";
import DisplayReducer from "./pages/DisplayReducer";
import DisplayRedux from "./pages/DisplayRedux";
import DisplayRef from "./pages/DisplayRef";
import DisplayStateHandler from "./pages/DisplayStateHandler";
import DisplayStyles from "./pages/DisplayStyles";
import FormHandling from "./pages/FormHandling";
import Elements from "./pages/Elements";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Elements />} />
        <Route path="/card" element={<DisplayCard />} />
        <Route path="/container" element={<DisplayContainer />} />
        <Route path="/context" element={<DisplayContext />} />
        <Route path="/counter" element={<DisplayCouter />} />
        <Route path="/effects" element={<DisplayEffects />} />
        <Route path="/lists" element={<DisplayList />} />
        <Route path="/reducer" element={<DisplayReducer />} />
        <Route path="/redux" element={<DisplayRedux />} />
        <Route path="/ref" element={<DisplayRef />} />
        <Route path="/state" element={<DisplayStateHandler />} />
        <Route path="/styles" element={<DisplayStyles />} />
        <Route path="/forms" element={<FormHandling />} />
        <Route path="*" element={<>This page does not exist.</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
