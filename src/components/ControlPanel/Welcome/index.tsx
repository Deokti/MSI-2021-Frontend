import React from 'react';

import './style.scss';
import { WelcomeProps } from './Welcome.props';

export function Welcome({ title, subtitle }: WelcomeProps): React.ReactElement<WelcomeProps> {

  return (
    <h1 className="welcome">
      <span className="title">{title}</span>
      <span className="subtitle">{subtitle}</span>
    </h1>
  )
}