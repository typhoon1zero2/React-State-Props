import React from 'react'

function EmployeeListItems({img ,name, title}) {
  return (
   <li className='employee-list-item'>
       <div className='thumbnail'>
           <img src={img} className="img" alt={name} />
       </div>
       <div className='employee-info'>
           <p className='employee-name'>{name}</p>
           <p className='employee-title'>{title}</p>
       </div>
   </li>
  )
}

export default EmployeeListItems