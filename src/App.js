import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Homepage from "./components/Homepage";
import { useState } from 'react';
import EmployeePage from "./components/EmployeePage";

//Routes Lecture today SEI Cafe 

function App() {
  const [employeeInfo, setEmployeeInfo] = useState({});
  const dataArr = (data) => {
    setEmployeeInfo(data);
  }
  return (
    <div className="App">
      <Routes>
                <Route path="/" element={<Homepage getInfo={dataArr} />} /> 
                <Route path="/:name" element={<EmployeePage info={employeeInfo} />} />
            </Routes>
    </div>
  );
}

export default App;