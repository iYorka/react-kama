import './App.css';
import Header from "./shared/Header/Header";
import Sidebar from "./shared/Sidebar/Sidebar";
import Content from "./shared/Content/Content";
import Dialogs from "./shared/Content/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App({state}) {
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
                profileProps = {state.profilePage}
              />}/>
            <Route path="/profile" element={
              <Content
                profileProps = {state.profilePage}
              />}/>
            <Route path="/dialogs" element={
              <Dialogs
                dialogProps = {state.dialogsPage}
              />}/>
            <Route path="/dialogs/:userID" element={
              <Dialogs
                dialogProps = {state.dialogsPage}
              />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;