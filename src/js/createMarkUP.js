import ref from './refs';
const { catInfo } = ref;

export function createMarkUpCatById(dataCat) {
  const { url, breeds } = dataCat;
  const divCatInfo = `<div class="tumb-img">
  <img src="${url}" alt="${breeds[0].name}">
  <h2>${breeds[0].name}</h2>
  <p>${breeds[0].description}</p>
  <h3>Temperament:${breeds[0].temperament}</h3>
</div>`;
  catInfo.innerHTML = divCatInfo;
}
