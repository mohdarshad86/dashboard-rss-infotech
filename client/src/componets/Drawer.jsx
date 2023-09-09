import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Drawer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faHome, faPercent, faUser } from '@fortawesome/free-solid-svg-icons'

const Drawer = () => {
  return (
    <ul className={styles.drawer}>
      <li>
        <NavLink to='/' className={({ isActive }) => isActive ? styles.active : ''}>
          <FontAwesomeIcon className={styles.icon} icon={faHome} /><span>Home</span></NavLink>
      </li>
      <li>
        <NavLink to='/user' className={({ isActive }) => isActive ? styles.active : ''}>
          <FontAwesomeIcon className={styles.icon} icon={faUser} /><span>Users</span></NavLink>
      </li>
      <li>
        <NavLink to='/help' className={({ isActive }) => isActive ? styles.active : ''}>
          <FontAwesomeIcon className={styles.icon} icon={faHandshake} /><span>Help</span></NavLink>
      </li>
      <li>
        <NavLink to='/offers' className={({ isActive }) => isActive ? styles.active : ''}>
          <FontAwesomeIcon className={styles.icon} icon={faPercent} /><span>Offers</span></NavLink>
      </li>
    </ul>
  )
}

export default Drawer