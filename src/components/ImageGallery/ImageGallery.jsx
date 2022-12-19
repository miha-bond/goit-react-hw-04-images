import GalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ photos, onSelect }) => {
  return (
    <ul className={css.galleryList}>
      {photos.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <li className={css.galleryItem} key={id}>
            <GalleryItem
              photos={photos}
              onSelect={onSelect}
              smallImg={webformatURL}
              largeImg={largeImageURL}
              tags={tags}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
