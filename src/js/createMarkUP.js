import ref from './refs';
console.log(ref.catInfo);

const { catInfo } = ref;

export function createMarkUpSelect(catSelect) {
// Неявне повернення
    // return catSelect.map(element => ({ name: element.name, value: element.id }));

    //Явне повернення
    return catSelect.map(element => {
         return { text: element.name, value: element.id };
     })

}


export function createMarkUpCatById(dataCat) {
  const { url, breeds } = dataCat;
  const divCatInfo = `<div class="tumb-img">
  <img class="photo" src="${url}" alt="${breeds[0].name}">
<div class="description-img">
  <h2>${breeds[0].name}</h2>
  <p>${breeds[0].description}</p>
  <h3>Temperament:${breeds[0].temperament}</h3>
</div>
</div>`;
  catInfo.innerHTML = divCatInfo;
}
