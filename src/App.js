import './App.css';
import Header from "./shared/Header/Header";
import Sidebar from "./shared/Sidebar/Sidebar";
import Content from "./shared/Content/Content";

function App() {
  return (
    <div className="appWrapper">
      <div className="appHeader" >
        <Header/>
      </div>
      <div className="appSidebar">
        <Sidebar/>
      </div>
      <div className="appContent">
        <Content/>
      </div>

    </div>
  );
}

export default App;
