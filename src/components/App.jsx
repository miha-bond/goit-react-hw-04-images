import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { pixadayApi } from '../services/pixadayAPI';

import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    page: 1,
    total: 0,
    query: '',
    photos: [],
    selectedImage: false,
  };

  async componentDidUpdate(_, prevState) {
    try {
      const { page, query, photos } = this.state;
      if (prevState.page !== page || prevState.query !== query) {
        this.setState({ isLoading: true });
        const responce = await pixadayApi(query, page);
        const data = responce.hits.map(
          ({ id, largeImageURL, tags, webformatURL }) => {
            return {
              id,
              largeImageURL,
              tags,
              webformatURL,
            };
          }
        );
        this.setState({
          photos: [...photos, ...data],
          isLoading: false,
        });
      }
    } catch (error) {
      toast.error('😢😢😢 Oops! Something went wrong! Please try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  searchPhoto = ({ searchQuery }) => {
    const { query } = this.state;
    if (searchQuery !== query) {
      this.setState({
        photos: [],
        page: 1,
      });
    }
    this.setState({
      query: searchQuery,
      page: 1,
    });
  };

  selectImage = imgUrl => {
    this.setState({
      selectedImage: imgUrl,
    });
  };

  resetImage = () => {
    this.setState({
      selectedImage: false,
    });
  };

  render() {
    const { photos, isLoading, selectedImage } = this.state;
    return (
      <>
        <div>
          <Searchbar onSubmit={this.searchPhoto} />
          {photos.length > 0 && (
            <ImageGallery photos={photos} onSelect={this.selectImage} />
          )}
          {photos.length > 38 && !isLoading && (
            <Button onClick={this.loadMore} />
          )}
          {isLoading && <Loader />}
          <Modal selectImage={selectedImage} resetImage={this.resetImage} />
          <ToastContainer />
        </div>
      </>
    );
  }
}
