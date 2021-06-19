import React from 'react';
import Button from '../Button';
import { BiSearch } from 'react-icons/bi';
import { setActiveControlPath } from '../../actions/management';

import './style.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ICONS } from './ICONS';
import { IStore } from '../../interfaces/store';
import clsx from 'clsx';
import { HeaderSearchProps } from './HeaderSearch.props';


function HeaderSearch({ setActiveControlPath, management }: HeaderSearchProps): React.ReactElement<HeaderSearchProps> {

  return (
    <header className="header">
      <label className="header__search">
        <input type="text" className="header__input" placeholder="Поиск пород по названию" />
        <Button width={40} height={40} borderRadius={10} className="header__button">
          <BiSearch size={20} color="#FF868E" />
        </Button>
      </label>

      <ul className="header__icons">
        {
          ICONS.map(icon => {
            const { id, route } = icon;

            const active = (`/${management.currentPath && management.currentPath[0]}`) === route;

            return (
              <li className="header__icon" key={id}>
                <Link to={route} onClick={() => setActiveControlPath(route)}>
                  <Button {...icon} width={60} height={60} borderRadius={20} className={clsx({ 'active': active })} />
                </Link>
              </li>
            );
          })
        }

      </ul>
    </header>
  )
}

const mapStateToProps = ({ management }: IStore) => ({ management })

export default connect(mapStateToProps, { setActiveControlPath })(HeaderSearch)