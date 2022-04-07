import {Link} from "react-router-dom"
export default function Header(props) {
    return (
      <header>
        {props.back ? <Link id="backBtn" to={`/`}>&lt;</Link> : ''}
        <h3 className="title">{props.title}</h3>
      </header>
    );
  }