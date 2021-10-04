import React from "react";
import {Link, withRouter} from "react-router-dom";
function Navigation() {
  return (
    <div className="Navigation">
      <ul>
        <li>
          <Link to="/"></Link>
        </li>
      </ul>
    </div>
  )
}