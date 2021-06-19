import React, { ReactElement } from 'react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IStore } from '../../interfaces/store';

import { useHistory } from 'react-router';
import { setActiveControlPath } from '../../actions/management';
import Button from '../Button';

import { translateNavigation } from '../../utils/translate-navagation';

import './style.scss';
import clsx from 'clsx';
import { NavigationProps } from './Navigation.props';



function Navigation({ currentPath, setActiveControlPath }: NavigationProps): ReactElement<NavigationProps> {
  const { push } = useHistory();

  function onClickHomePage(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    setActiveControlPath(currentRoutePath());
    push(currentRoutePath());
  }

  function currentRoutePath() {
    const currentPathLenght = (currentPath && currentPath.length);
    return (currentPathLenght as number) >= 2 ? `/${currentPath && currentPath[0]}` : '/';
  }

  return (
    <div className="navigation">
      <Link to={currentRoutePath()} onClick={onClickHomePage}>
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
      </ul>
    </div>
  )
}

const mapStateToProps = ({ management: { currentPath } }: IStore) => ({ currentPath })

export default connect(mapStateToProps, { setActiveControlPath })(Navigation)