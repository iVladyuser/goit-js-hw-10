import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createMarkUpCatById, createMarkUpSelect } from './js/createMarkUP';
import {onFetchError} from './js/showError'
import './style.css';

console.log(createMarkUpCatById);

import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

import ref from './js/refs';
const { selector, catInfo, loader } = ref;

loader.classList.replace('loader', 'is-hidden');

catInfo.classList.add('is-hidden');



fetchBreeds()
  .then(data => {

    new SlimSelect({
      select: selector,
      data: createMarkUpSelect(data),
    })
  })
  .catch(onFetchError);

selector.addEventListener('change', onSelect);

function onSelect(evt) {
  loader.classList.replace('is-hidden', 'loader');
  selector.classList.add('is-hidden');
  catInfo.classList.add('is-hidden');

  const breedId = evt.currentTarget.value;
  console.log(breedId);
  fetchCatByBreed(breedId)
    .then(data => {
      console.log(data);
      loader.classList.replace('loader', 'is-hidden');
      selector.classList.remove('is-hidden');
      console.log(data[0]);
      createMarkUpCatById(data[0]);
      catInfo.classList.remove('is-hidden');
    })
    .catch(onFetchError);
}

