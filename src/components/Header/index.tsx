import React from 'react';
import Button from '../Button';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiSmile } from 'react-icons/fi';
import { CgSmileSad } from 'react-icons/cg';

import './style.scss';

const ICONS = [
  {
    id: 0,
    children: <FiSmile size={20} color="#FF868E" />,
  },
  {
    id: 1,
    children: <AiOutlineHeart size={20} color="#FF868E" />,
  },
  {
    id: 2,
    children: <CgSmileSad size={20} color="#FF868E" />,
  },
];

export function Header(): React.ReactElement {

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
            const { id } = icon;

            return (
              <li className="header__icon" key={id}>
                <Button {...icon} width={60} height={60} borderRadius={20} />
              </li>
            );
          })
        }

      </ul>
    </header>
  )
}