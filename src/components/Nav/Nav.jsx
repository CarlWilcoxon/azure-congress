import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function Nav() {
  return (
    <Router forceRefresh={true}>
        <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/congress/senate"> Senate </Link>
          </li>
          <li>
            <Link to="/congress/house"> House </Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
}

export default Nav;
