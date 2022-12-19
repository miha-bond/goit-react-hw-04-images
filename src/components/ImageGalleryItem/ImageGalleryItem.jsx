import css from './ImageGalleryItem.module.css';
const GalleryItem = ({ smallImg, largeImg, tags, onSelect }) => {
  return (
    <img
      className={css.galleryImg}
      src={smallImg}
      alt={tags}
      onClick={() => {
        onSelect(largeImg);
      }}
    />
  );
};

export default GalleryItem;
