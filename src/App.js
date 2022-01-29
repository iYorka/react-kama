import './App.css';
import Header from "./shared/Header/Header";
import Sidebar from "./shared/Sidebar/Sidebar";
import Content from "./shared/Content/Content";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./shared/Content/Dialogs/DialogsContainer";

function App({store}) {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <div className="appHeader">
          <Header/>
        </div>
        <div className="appSidebar">
          <Sidebar/>
        </div>
        <div className="appContent">
          <Routes>
            <Route path="/" element={
              <Content
                store={store}
              />}/>
            <Route path="/profile" element={
              <Content
                store={store}
              />}/>
            <Route path="/dialogs" element={
              <DialogsContainer
                store={store}
              />}/>
            <Route path="/dialogs/:userID" element={
              <DialogsContainer
                store={store}
              />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;