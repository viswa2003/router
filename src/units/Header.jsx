import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div> <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/books">Books</Link>
      </li>
    </ul>
  </nav>
   </div>
  )
}
