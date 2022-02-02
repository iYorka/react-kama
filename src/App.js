import './App.css';
import Sidebar from "./shared/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./shared/Content/Dialogs/DialogsContainer";
import UsersContainer from "./shared/Users/UsersContainer";
import ContentContainer from "./shared/Content/ContentContainer";
import HeaderContainer from "./shared/Header/HeaderContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <div className="appHeader">
          <HeaderContainer/>
        </div>
        <div className="appSidebar">
          <Sidebar/>
        </div>
        <div className="appContent">
          <Routes>
            <Route path="/" element={
              <ContentContainer/>}/>
            <Route path="/profile" element={
              <ContentContainer/>}/>
            <Route path="/profile/:userID" element={
              <ContentContainer/>}/>
            <Route path="/dialogs" element={
              <DialogsContainer/>}/>
            <Route path="/dialogs/:userID" element={
              <DialogsContainer/>}/>
            <Route path="/users" element={
              <UsersContainer/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;