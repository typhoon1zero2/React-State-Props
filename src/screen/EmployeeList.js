import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import EmployeeList from "../components/EmployeeList";
import employeeArr from "../data";
import EmployeeListItems from "../components/EmployeeListItem";
import "./App.css";

export default function EmployeeHomePage(props) {
  return (
    <div className="homepage">
      <Header title="" />
      <SearchBar />
      <EmployeeList >
        {employeeArr.map((listItem, idx) => {
          return <EmployeeListItems getInfo = {props.getInfo}{...listItem} key={idx} />;
        })}
      </EmployeeList>
    </div>
  );
}