import React, { ReactElement } from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IStore } from '../../interfaces/store';

import { useHistory } from 'react-router';
import { setActiveControlPath } from '../../actions/management';
import Button from '../Button';

import { translateNavigation } from '../../utils/translate-navation';
import { ROUTER_PATH } from '../../config/ROUTER_PATH';

import './style.scss';
import clsx from 'clsx';

interface NavigationProsp {
  currentPath: null | Array<string>
  setActiveControlPath: (path: string) => any
}

function Navigation({ currentPath, setActiveControlPath }: NavigationProsp): ReactElement<NavigationProsp> {
  const { push } = useHistory();

  function onClickHomePage(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const currentPathLenght = (currentPath && currentPath.length);

    const pathname: string = (currentPathLenght as number) >= 2 ? `/${currentPath && currentPath[0]}` : '/';
    setActiveControlPath(pathname);
    push(pathname);
  }

  return (
    <div className="navigation">
      <Link to={ROUTER_PATH.root} onClick={onClickHomePage}>
        <Button width={40} height={40} borderRadius={10} className="navigation__button">
          <RiArrowLeftSLine color="#FF868E" size={40} />
        </Button>
      </Link>

      <ul className="navigation__links">
        {
          currentPath && currentPath.map((item, index, array) => {
            const currentIndex = index + 1;
            const arrayLength = array.length;
            const noActive = (arrayLength >= 2) && (currentIndex === 1);

            return (
              <li className={clsx('navigation__link', { 'no-active': noActive })} key={item}>
                {translateNavigation(item)}
              </li>
            )
          })
        }

        {/* <Link to={ROUTER_PATH.breeds} className={clsx('navigation__link', { 'no-active': supPath !== null })}>
          {/* <span>{translateNavigation(path as string)}</span> */}
        {/* </Link> */}
      </ul>
    </div>
  )
}

const mapStateToProps = ({ management: { currentPath } }: IStore) => ({ currentPath })

export default connect(mapStateToProps, { setActiveControlPath })(Navigation)