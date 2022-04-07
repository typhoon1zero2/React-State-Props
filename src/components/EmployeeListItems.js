import React from 'react'
import { Link }from 'react-router-dom';
import { useEffect } from 'react'

function EmployeeListItems({img ,name, title, officePhone,mobilePhone, email, dataArr }) {
    const employeeInfo = {  name, img, title, officePhone, mobilePhone, email }
  return (
      <Link onClick={() => { dataArr(employeeInfo) }} to={`/${name}`}>
   <li className='employee-list-item'>
       <div className='thumbnail'>
           <img src={img} className="img" alt={name} />
       </div>
       <div className='employee-info'>
           <p className='employee-name'>{name}</p>
           <p className='employee-title'>{title}</p>
           {/* <p className='employee-phone'>{officePhone}</p>
           <p className='employee-cell'>{mobilePhone}</p>
           <p className='employee-email'>{email}</p>
            */}
            <div className="information">

<div>CLick Info {name}</div>

</div>
       </div>
   </li>
   </Link>
  )
}

export default EmployeeListItems