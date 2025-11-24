import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';


const form = document.querySelector('.form');
const inputQuery = document.querySelector('.search-input');

function onFormSubmit(event) {
    event.preventDefault();
    const query = inputQuery.value.trim();
    if (query === '') {
        iziToast.error({
            title: 'Error',
            message: `Please enter what you want to search`,
        });
        return;
    }
    clearGallery();
    showLoader();
    getImagesByQuery(query)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: `Sorry, there are no images matching your search ${query}. Please try again!`,
                });
                return;
            }
            createGallery(data.hits);
            hideLoader();
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: `An error occurred: ${error.message}`,
            });
            hideLoader();
        });
};  

form.addEventListener('submit', onFormSubmit);