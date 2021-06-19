import React, { useCallback, ReactElement, useEffect } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../Navigation';
import { getBreedsRequest, setBreedsActiveDog, setBreedsLimit, setFilterDogName, setSortedBreeds } from '../../../actions/breeds';
import { IStore } from '../../../interfaces/store';
import { LoadingSpinner } from '../../LoadingSpinner';
import Button from '../../Button';
import { IResponseBreed } from '../../../interfaces/response';
import { SelectInput } from '../../SelectInput';
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai';
import { filterDogsByName } from '../../../utils/filter-dogs-by-name';
import clsx from 'clsx';
import { getSortedBreeds } from '../../../utils/get-sorted-breeds';

import './style.scss';
import '../../../assets/styles/scroll.scss';
import { getBreedsAllDogsRequest } from '../../../actions/data';
import { BreedsList } from '../../BreedsList';
import { ContentPanelBreedsProps } from './ContentPanelBreeds.props';


function ContentPanelBreeds({
  getBreedsRequest,
  getBreedsAllDogsRequest,
  breeds,
  data,
  setBreedsActiveDog,
  setBreedsLimit,
  setFilterDogName,
  setSortedBreeds
}: ContentPanelBreedsProps): ReactElement<ContentPanelBreedsProps> {

  const getBreeds = useCallback(() => breeds.data === null ? getBreedsRequest() : null, [breeds.data, getBreedsRequest])
  const getBreedsAllDogs = useCallback(() => data.breedsAllDogs === null
    ? getBreedsAllDogsRequest()
    : null,
    [data.breedsAllDogs, getBreedsAllDogsRequest]);

  useEffect(() => { getBreeds(); getBreedsAllDogs() }, [getBreeds, getBreedsAllDogs]);

  function onSetLimit(defaultValue: number | string) {
    setBreedsLimit(Number(defaultValue));
  }

  function onSetFilterDogName(defaultValue: string | number) {
    setFilterDogName(defaultValue as string);
  }

  return (
    <div className="content-panel-breeds content-panel-background">
      <header className="content-panel-breeds__header">
        <Navigation />
        <SelectInput
          values={data.breedsAllDogs}
          defaultValue={breeds && breeds.filterDogName as string}
          getValueByList={onSetFilterDogName}
          margin="0 10px 0 0"
        />

        <SelectInput
          values={[5, 10, 15, 20]}
          label="Лимит"
          defaultValue={breeds && breeds.limit}
          getValueByList={onSetLimit}
          margin="0 10px 0 0"
        />
        <Button className={clsx('content-panel-breeds__sort', { 'is-active': breeds.sorted === 'DESC' })}
          onClick={() => setSortedBreeds("DESC")}
        >
          <AiOutlineSortDescending color="#8C8C8C" size={25} />
        </Button>

        <Button className={clsx('content-panel-breeds__sort', { 'is-active': breeds.sorted === 'ASC' })}
          onClick={() => setSortedBreeds('ASC')}
        >
          <AiOutlineSortAscending color="#8C8C8C" size={25} />
        </Button>
      </header>

      {breeds.loading
        ? <LoadingSpinner />
        : <BreedsList
          apperance="breeds"
          onClick={(dog) => setBreedsActiveDog(dog as IResponseBreed)}
          dogsList={
            filterDogsByName(
              breeds && breeds.filterDogName,
              getSortedBreeds(breeds && breeds.sorted, (breeds.data || []))
                .slice(0, breeds.limit))
          } />
      }
    </div>
  )
}

const mapStateToProps = ({ breeds, data }: IStore) => ({ breeds, data });

export default connect(
  mapStateToProps,
  {
    getBreedsRequest,
    setBreedsActiveDog,
    setBreedsLimit,
    setFilterDogName,
    setSortedBreeds,
    getBreedsAllDogsRequest
  }
)
  (ContentPanelBreeds);