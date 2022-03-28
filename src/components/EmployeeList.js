import employeeData from '../data';
import EmployeeListItem from './EmployeeListItems';

const employees = employeeData.map((el, idx) => {
    return <EmployeeListItem key={idx} {...el} />;
});

export default function EmployeeList(props){
    return <ul className='employees-list'>{employees}</ul>
}