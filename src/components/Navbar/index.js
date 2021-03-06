import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../TokenSlice/index';
import Button from '../Button';

export default function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <div className="container navbar__nav">
        <div className="navbar__menu">
          <Button className='btn-logout' onClick={() => dispatch(logout())}>Logout</Button>
        </div>
      </div>
    </nav>
  )
}