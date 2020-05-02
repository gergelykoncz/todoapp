import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './Footer.scss';

export const Footer = () => {
  const classes = classNames('app-footer');

  return (
    <footer className={classes}>
      <ul>
        <li>
          <Link to="/">Todo</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </footer>
  );
};
