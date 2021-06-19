import React from 'react';
import { IResponseBreed, IResponseVoting } from '../../interfaces/response';

import './style.scss';
import '../../assets/styles/scroll.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Button from '../Button';
import { translateNameDogs } from '../../utils/translate-name-dogs';
import { AiOutlineHeart } from 'react-icons/ai';
import { BreedsListBreedsProps, BreedsListDefaultProps, BreedsListGalleryProps, BreedsListProps } from './BreedsList.props';
import { IVoteImage } from '../../interfaces/other';


function BreedsList({ dogsList, isScroll = true, onClick, apperance }: BreedsListProps): React.ReactElement<BreedsListProps> {

  return (
    <ul className={clsx('breeds-list', { 'scroll': isScroll })}>
      {
        dogsList && dogsList.map((dog: IResponseBreed | IResponseVoting | IVoteImage) => {

          return (
            <li className="breeds-list__item" key={(dog as IResponseBreed | IResponseVoting).id || (dog as IVoteImage).image_id}>
              {
                apperance === 'breeds'
                  ? <BreedsListBreeds dog={dog as IResponseBreed} onClick={() => onClick && onClick(dog as IResponseBreed)} />
                  : apperance === 'gallery'
                    ? <BreedsListGallery dog={dog as IResponseVoting} onClick={() => onClick && onClick(dog as IResponseVoting)} />
                    : <BreedListDafault dog={dog as IVoteImage} />
              }
            </li>
          )
        })
      }
    </ul>
  )
}

function BreedListDafault({ dog, onClick }: BreedsListDefaultProps): React.ReactElement<BreedsListDefaultProps> {
  return (
    <div className="breeds-list__default">
      <div style={{ backgroundImage: `url('${dog.image_url}')` }} />
    </div>
  );
}

function BreedsListBreeds({ dog, onClick }: BreedsListBreedsProps): React.ReactElement<BreedsListBreedsProps> {
  return (
    <div className="breeds-list__breeds">
      <Link to={`/breeds/${dog.id}`} onClick={() => onClick && onClick(dog)}>
        <div style={{ backgroundImage: `url('${dog.image.url}')` }} />
        <Button
          backgroundColor="#fff"
          borderRadius={10}
          width={180}
          color="#FF868E"
          fontSize={16}
          className="breeds-list__button"
        >
          {translateNameDogs(dog.name)}
        </Button>
      </Link>
    </div>
  )
}

function BreedsListGallery({ dog, onClick }: BreedsListGalleryProps): React.ReactElement<BreedsListGalleryProps> {
  return (
    <div className="breeds-list__gallery" onClick={() => onClick && onClick(dog)}>
      <div style={{ backgroundImage: `url('${dog.url}')` }} />
      <div className="breeds-list__favourite">
        <Button width={40} height={40} borderRadius={10} className="breeds-list__favourite-button">
          <AiOutlineHeart color="#FF868E" size={25} />
        </Button>
      </div>
    </div>
  )
}


export { BreedsList };