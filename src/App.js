import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboardview from "./components/Dashboardview";
import { Outlet } from "react-router-dom";
import Tables from "./components/Tables";

function App() {
  return (
    <div className="flex">
      <div className="basis-[12%] h-[100vh]">
        <Sidebar />
      </div>
      <div className="basis-[88%] border h-[100vh] overflow-scroll">
        <Dashboardview />
        <div>
          <Outlet>
            <Tables />
          </Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
