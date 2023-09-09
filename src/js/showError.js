import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ref from './refs';
const { selector,  loader, } = ref;

export function onFetchError(error) {
        selector.classList.remove('is-hidden');
    loader.classList.replace('loader', 'is-hidden');

    Notify.failure(
    'Oops! Something went wrong! Select please another cat breed!',
    {
        position: 'center-center',
        timeout: 5000,
        width: '400px',
        fontSize: '24px',
    }
    );
}
