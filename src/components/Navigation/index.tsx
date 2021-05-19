import React, { ReactElement } from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IStore } from '../../interfaces/store';

import { useHistory } from 'react-router';
import { setActiveControl } from '../../actions/management';
import Button from '../Button';

import './style.scss';
import { translateNavigation } from '../../utils/translate-navation';

interface NavigationProsp {
  active: null | string
  setActiveControl: (path: string) => any
}

function Navigation({ active, setActiveControl }: NavigationProsp): ReactElement<NavigationProsp> {
  const { push } = useHistory();

  function onClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    const pathname: string = '/';
    setActiveControl(pathname);
    push(pathname);
  }

  return (
    <div className="navigation">
      <Link to="/" onClick={onClick}>
        <Button width={40} height={40} borderRadius={10} className="navigation__button">
          <RiArrowLeftSLine color="#FF868E" size={40} />
        </Button>
      </Link>

      <span className="navigation__link">
        {translateNavigation(active || '')}
      </span>
    </div>
  )
}

const mapStateToProps = ({ management: { active } }: IStore) => ({ active })

export default connect(mapStateToProps, { setActiveControl })(Navigation)