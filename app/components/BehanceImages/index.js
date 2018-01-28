// @flow
import React, { Component } from 'react';
import type { behanceImagesStateType } from '../../reducers/behanceImages';
import styles from './styles.css';

type Props = {
  fetchBehanceImages: () => void,
  images: behanceImagesStateType
};

class BehanceImages extends Component<Props> {
  props: Props;

  componentDidMount() {
    this.props.fetchBehanceImages();
  }

  render() {
    const {
      images
    } = this.props;
    return (
      <div className={styles.container}>
        {images.map(({ thumbUrl, id }) => <img key={id} src={thumbUrl} alt={id} />)}
      </div>
    );
  }
}

export default BehanceImages;
