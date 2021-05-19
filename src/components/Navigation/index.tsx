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
import { ROUTER_PATH } from '../../config/ROUTER_PATH';
import clsx from 'clsx';

interface NavigationProsp {
  path: null | string
  setActiveControl: (path: string) => any
  supPath: null | string | number
}

function Navigation({ path, setActiveControl, supPath }: NavigationProsp): ReactElement<NavigationProsp> {
  const { push } = useHistory();

  function onClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    const pathname: string = '/';
    setActiveControl(pathname);
    push(pathname);
  }

  return (
    <div className="navigation">
      <Link to={ROUTER_PATH.root} onClick={onClick}>
        <Button width={40} height={40} borderRadius={10} className="navigation__button">
          <RiArrowLeftSLine color="#FF868E" size={40} />
        </Button>
      </Link>

      <div className="navigation__links">

        <Link to={ROUTER_PATH.breeds} className={clsx('navigation__link', { 'no-active': supPath !== null })}>
          <span>{translateNavigation(path || '')}</span>
        </Link>

        {supPath && <span className="navigation__link">{supPath}</span>}
      </div>
    </div>
  )
}

const mapStateToProps = ({ management: { path, supPath } }: IStore) => ({ path, supPath })

export default connect(mapStateToProps, { setActiveControl })(Navigation)