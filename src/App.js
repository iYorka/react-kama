import './App.css';
import Header from "./shared/Header/Header";
import Sidebar from "./shared/Sidebar/Sidebar";
import Content from "./shared/Content/Content";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./shared/Content/Dialogs/DialogsContainer";
import UsersContainer from "./shared/Users/UsersContainer";
import ContentContainer from "./shared/Content/ContentContainer";

function App() {
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