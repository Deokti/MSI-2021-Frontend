import React from 'react';
import { IResponseBreed, IResponseVoting } from '../../interfaces/response';

import './style.scss';
import '../../assets/styles/scroll.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Button from '../Button';
import { translateNameDogs } from '../../utils/translate-name-dogs';
import { AiOutlineHeart } from 'react-icons/ai';

interface BreedsListProps {
  dogsList: Array<IResponseBreed | IResponseVoting> | null
  isScroll?: boolean
  onClick?: (dog?: IResponseBreed | IResponseVoting) => any
  apperance?: 'breeds' | 'gallery'
}

function BreedsList({ dogsList, isScroll = true, onClick, apperance = 'breeds' }: BreedsListProps): React.ReactElement<BreedsListProps> {

  return (
    <ul className={clsx('breeds-list', { 'scroll': isScroll })}>
      {
        dogsList && dogsList.map((dog: IResponseBreed | IResponseVoting) => {

          return (
            <li className="breeds-list__item" key={dog.id}>
              {
                apperance === 'breeds'
                  ? (
                    <div className="breeds-list__breeds">
                      <Link to={`/breeds/${dog.id}`} onClick={() => onClick && onClick(dog as IResponseBreed)}>
                        <div style={{ backgroundImage: `url('${(dog as IResponseBreed).image.url}')` }}></div>
                        <Button
                          backgroundColor="#fff"
                          borderRadius={10}
                          width={180}
                          color="#FF868E"
                          fontSize={16}
                          className="breeds-list__button"
                        >
                          {translateNameDogs((dog as IResponseBreed).name)}
                        </Button>
                      </Link>
                    </div>
                  )
                  : (
                    <div className="breeds-list__gallery" onClick={() => onClick && onClick(dog as IResponseVoting)}>
                      <div style={{ backgroundImage: `url('${(dog as IResponseVoting).url}')` }} />
                      <div className="breeds-list__favourite">
                        <Button width={40} height={40} borderRadius={10} className="breeds-list__favourite-button">
                          <AiOutlineHeart color="#FF868E" size={25} />
                        </Button>
                      </div>
                    </div>
                  )
              }
            </li>
          )
        })
      }

    </ul>
  )
}


export { BreedsList };