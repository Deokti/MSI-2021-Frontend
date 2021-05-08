import React from 'react';

import './style.scss';

interface WelcomeProps {
  title: string
  subtitle: string
}

export function Welcome({ title, subtitle }: WelcomeProps): React.ReactElement<WelcomeProps> {

  return (
    <h1 className="welcome">
      <span className="title">{title}</span>
      <span className="subtitle">{subtitle}</span>
    </h1>
  )
}