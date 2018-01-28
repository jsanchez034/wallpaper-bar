// @flow
import { TWITTER_IMAGES_RECEIVED } from '../actions/behanceImages';

type behanceImage = {
  +id: number,
  +width: number,
  +height: number,
  +url: string,
  +thumbUrl: string
};

export type behanceImagesStateType = Array<behanceImage>;

type ImageRecievedAction = {
  +type: string,
  +data: behanceImagesStateType
};

type DefaultActions = {
  +type: string
};

type Action = ImageRecievedAction | DefaultActions;

const initialState = [];

export default function behanceImages(
  state: behanceImagesStateType = initialState,
  action: Action
) {
  switch (action.type) {
    case TWITTER_IMAGES_RECEIVED:
      return [...state, ...action.data];
    default:
      return state;
  }
}
