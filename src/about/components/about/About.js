import React from 'react';
import classNames from 'classnames';

import './About.scss';

export const About = () => {
  const classes = classNames('app-about');
  return (
    <div className={classes}>
      <h2>About</h2>
      <p>A quick starter project using React Redux, hooks and scss.</p>
      <p>Testing: jest and enzyme.</p>
    </div>
  );
};
