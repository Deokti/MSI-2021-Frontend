import { IVoteImage } from "../../interfaces/other";
import { IResponseBreed, IResponseVoting } from "../../interfaces/response";

export interface BreedsListProps {
  dogsList: Array<IResponseBreed | IResponseVoting | IVoteImage> | null
  isScroll?: boolean
  onClick?: (dog?: IResponseBreed | IResponseVoting) => any
  apperance: 'breeds' | 'gallery' | 'default'
}

export interface BreedsListGalleryProps {
  dog: IResponseVoting
  onClick: (dog?: IResponseVoting) => any
}

export interface BreedsListBreedsProps {
  dog: IResponseBreed
  onClick: (dog?: IResponseBreed) => any
}

export interface BreedsListDefaultProps {
  dog: IVoteImage
  onClick?: (dog?: IVoteImage) => any
}