import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList'

function Homepage() {
  
    return(
        <div className='homepage-app'>
            <Header />
            <SearchBar />
            <EmployeeList />

        </div>
    )
  
}

export default Homepage