import React, { useEffect, useState } from 'react';
import Button from '../../Button';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiSmile } from 'react-icons/fi';
import { CgSmileSad } from 'react-icons/cg';
import './style.scss';
import { API_KEY } from '../../../config/API_KEY';


// https://api.thedogapi.com/v1/images/search --> рандомные картинки с изображением
// https://api.thedogapi.com/v1/votes --> история голосования

const BUTTONS = [
  {
    id: 0,
    children: <FiSmile size={35} color="#fff" />,
    backgroundColor: '#97EAB9',
    borderRadius: "20px 0 0 20px"
  },
  {
    id: 1,
    children: <AiOutlineHeart size={35} color="#fff" />,
    backgroundColor: '#FF868E',
    borderRadius: "0 0 0 0"
  },
  {
    id: 2,
    children: <CgSmileSad size={35} color="#fff" />,
    backgroundColor: '#FFD280',
    borderRadius: "0 20px 20px 0"
  }
];

export function ContentPanelVoting() {
  const [image, setImage] = useState();


  useEffect(getData, []);

  function getData() {
    fetchData();
  }

  console.log(image);


  async function fetchData() {
    const response = await fetch('https://api.thedogapi.com/v1/images/search', {
      headers: { 'x-api-key': API_KEY }
    });

    const json = await response.json();
    setImage(json);
  }

  return (
    <div className="content-panel-voting">
      <header className="content-panel-voting__header">
        <img src={''} alt="" className="content-panel-voting__image" />

        <ul className="content-panel-voting__buttons">
          {BUTTONS.map((button) => {
            const { id } = button;

            return (
              <li key={id} className="content-panel-voting__button">
                <Button width={80} height={80} {...button} />
              </li>
            )
          })}

        </ul>
      </header>

      <ul className="content-panel-voting__actions">
        <li className="content-panel-voting__action">
          <span className="content-panel-voting__time">22:35</span>
          Image ID: <span className="content-panel-voting__id">fQSunHvl8</span> was added to Favourites
          <span className="content-panel-voting__icon">
            <AiOutlineHeart size={20} color="#FF868E" />
          </span>
        </li>
      </ul>
    </div>
  )
}