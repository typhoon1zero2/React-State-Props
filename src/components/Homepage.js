import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList'
import employeeArr from '../data';
import EmployeeListItem from './EmployeeListItems'

function Homepage(props) {
  
    return (
        <div className="homepage-app">
          <Header title="Employee Directory" />
          <SearchBar />
          <EmployeeList >
            {employeeArr.map((listItem, idx) => {
              return <EmployeeListItem getInfo = {props.getInfo}{...listItem} key={idx} />;
            })}
          </EmployeeList>
        </div>
      );
  
}

export default Homepage