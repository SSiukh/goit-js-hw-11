import getApi from './js/pixabay-api';
import iziToast from 'izitoast';
import createMarkUp from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loading = document.querySelector('.loader');

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  const keyWord = event.target.elements.formInput.value;
  loading.classList.remove('visually-hidden');
  gallery.innerHTML = '';

  if (!keyWord) {
    iziToast.show({
      message: 'Please enter a search term.',
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
    loading.classList.add('visually-hidden');
    return;
  }

  getApi(keyWord)
    .then(images => {
      if (!images.length) {
        throw new Error(
          'Sorry, there are no images matching <br /> your search query. Please try again!'
        );
      }
      const markUp = images
        .map(item => {
          return createMarkUp(item);
        })
        .join('');

      gallery.innerHTML = markUp;

      const lightbox = new SimpleLightbox('.gallery a', {
        captionSelector: 'img',
        captionsData: 'alt',
        captionPosition: 'bottom',
      });
      lightbox.refresh();
    })
    .catch(error => {
      //iziToast
      iziToast.show({
        message: error.message,
        backgroundColor: '#ef4040',
        position: 'topRight',
      });
    })
    .finally(() => {
      loading.classList.add('visually-hidden');
    });

  event.target.reset();
}
