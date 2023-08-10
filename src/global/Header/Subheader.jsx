import React from 'react'
import dropdownIcon from '../../assets/dropdown.svg';
import {Link} from 'react-router-dom'


const Subheader = () => {
  return (
   
    <nav class="navbar navbar-expand-lg bg-body-tertiary NAVSub">
    <div class="container-fluid">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <Link class="nav-link" to="#">Development & IT</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="#">Design & Creative</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="#">Sales & Marketing</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="#">Writing & Translation</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="#">Admin & Customer Support</Link>
    </li>
    <li class="nav-item dropdown">
      <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        More
      </Link>
      <ul class="dropdown-menu">
        <li><Link class="dropdown-item" to="#">Action</Link></li>
        <li><Link class="dropdown-item" to="#">Another action</Link></li>
        <li><hr class="dropdown-divider"/></li>
        <li><Link class="dropdown-item" to="#">Something else here</Link></li>
      </ul>
    </li>
  </ul>
  </div>
  </nav>
  )
}

export default Subheader