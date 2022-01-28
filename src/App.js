import './App.css';
import Header from "./shared/Header/Header";
import Sidebar from "./shared/Sidebar/Sidebar";
import Content from "./shared/Content/Content";
import Dialogs from "./shared/Content/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App({state,dispatch}) {
  debugger
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
                dispatch={dispatch}
              />}/>
            <Route path="/profile" element={
              <Content
                profileProps = {state.profilePage}
                dispatch={dispatch}
              />}/>
            <Route path="/dialogs" element={
              <Dialogs
                dialogProps = {state.dialogsPage}
                dispatch = {dispatch}
              />}/>
            <Route path="/dialogs/:userID" element={
              <Dialogs
                dialogProps = {state.dialogsPage}
                dispatch = {dispatch}
              />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;