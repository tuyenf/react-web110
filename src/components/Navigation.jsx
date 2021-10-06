import React from "react";
import {Link, withRouter} from "react-router-dom";
function Navigation() {
  return (
    <div className="Navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/data">Data Page</Link>
        </li>
      </ul>
    </div>
  )
}

export default withRouter(Navigation);