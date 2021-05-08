import React from 'react';
import { Row } from '../../Row';
import { Logo } from '../Logo';
import { SwitchTheme } from '../../SwitchTheme';

export function Header(): React.ReactElement {

  return (
    <header>
      <Row
        left={Logo}
        right={SwitchTheme}
      />
    </header>
  )
}