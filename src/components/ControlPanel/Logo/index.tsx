import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { IStore } from '../../../interfaces/store';

import logoDark from '../../../assets/image/logo-dark.svg';
import logoLight from '../../../assets/image/logo-light.svg';

interface LogoProps {
  darkTheme: boolean
}

function Logo({ darkTheme }: LogoProps): ReactElement<LogoProps> {
  return (
    <React.Fragment>
      {
        darkTheme
          ? <img src={logoDark} alt="PetsPaw" />
          : <img src={logoLight} alt="PetsPaw" />
      }
    </React.Fragment>
  );
}

const mapStateToProps = ({ data: { darkTheme } }: IStore) => ({ darkTheme })

export default connect(mapStateToProps)(Logo);