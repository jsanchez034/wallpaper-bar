// @flow
import type { behanceImagesStateType } from '../reducers/behanceImages';
import getBehanceImages from '../utils/getBehanceImages';

type actionType = {
  +type: string,
  +data: behanceImagesStateType
};

export const TWITTER_IMAGES_RECEIVED = 'TWITTER_IMAGES_RECEIVED';

function behanceImagesRecieved(data) {
  return {
    type: TWITTER_IMAGES_RECEIVED,
    data
  };
}

export function fetchBehanceImages() {
  return (dispatch: (action: actionType) => void) => {
    getBehanceImages()
      .then((data: behanceImagesStateType) => dispatch(behanceImagesRecieved(data)))
      .catch(() => {
        dispatch(behanceImagesRecieved([]));
      });
  };
}
