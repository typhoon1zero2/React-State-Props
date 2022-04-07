import Header from "./Header";
import { Link } from "react-router-dom";
export default function EmployeePage({
  img,
  name,
  title,
  officePhone,
  mobilePhone,
  email,
}) {
  return (
    <>
      <div className="employeePage">
        <Header back="/" title="Employee" />
        <div className="employeePageShow">
          <div>
            <img className="" src={img} alt={name} />
            <div>
              <span>{name}</span>
              <span>{title}</span>
            </div>
          </div>
          <div>
            <div className="PageWrap">
              <div>
                <p className="phone">Call Office</p>
                <p>{officePhone}</p>
              </div>
              <span className="arrow">&gt;</span>
            </div>
            <div className="PageWrap">
              <div className="showInfo">
                <p className="phone">Call Mobile</p>
                <p>{mobilePhone}</p>
              </div>
              <span className="arrow">&gt;</span>
            </div>
            <div className="PageWrap">
              <div className="showInfo">
                <p className="phone">SMS</p>
                <p>{mobilePhone}</p>
              </div>
              <span className="arrow">&gt;</span>
            </div>
            <div className="PageWrap">
              <div className="showInfo">
                <p className="phone">Email</p>
                <p>{email}</p>
              </div>
              <span className="arrow">&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
