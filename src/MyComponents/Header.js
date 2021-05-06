import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";


export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <Link className="nav-link" to="/addToDo"><i className="fas fa-plus fa-3x"></i></Link>
        </div>
      </nav>
    )
}
Header.defaultProps = {
    title: "Your Title Here"
}

Header.propTypes = {
    title: PropTypes.string
}