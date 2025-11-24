import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', { /* опції */ });
const loader = document.querySelector('.loader');

export function createGallery(hits) {
    const markup = hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
        <li class="gallery-item">
            <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}">
                <ul class="item-info">
                    <li>Likes
                    <div>${likes}</div>
                    </li>
                    <li>Views
                    <div>${views}</div>
                    </li>
                    <li>Comments
                    <div>${comments}</div>
                    </li>
                    <li>Downloads
                    <div>${downloads}</div>
                    </li>
                </ul>
            </a>
        </li>`;
    }).join('');
    
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = '';    
}

export function showLoader() {
    loader.classList.remove('hidden');
    
}

export function hideLoader() {
    loader.classList.add('hidden');
}