"use strict";

const folioUpdateGalleries = () => {
    let galleryCount = 1;
    const galleries = document.querySelectorAll('.is-style-folio-lightbox');
    if (galleries) {
        for (const gallery of galleries) {
            const galleryItems = gallery.querySelectorAll('a');
            for (const galleryItem of galleryItems) {
                console.log(galleryItem);
                galleryItem.setAttribute('data-gall', `folio-gallery-${galleryCount}`);
            }
            galleryCount = galleryCount + 1;
        }
    }
};
document.addEventListener('DOMContentLoaded', function() {
    // Go to top.
    const scrollUp = document.querySelector(".folio-to-top");
    if (scrollUp) {
        scrollUp.addEventListener('click', e => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Flyout menu.
    const flyOut = document.querySelector(".folio-flyout");
    const flyOutContainer = document.querySelector(".flyout-menu-container");
    const mainBody = document.querySelector("body");
    if (flyOut) {
        flyOut.addEventListener('click', e => {
            e.preventDefault();
            flyOutContainer.classList.toggle('active');
            mainBody.classList.toggle('flyout-menu-active');
        });
    }

    // Gallery lightbox.
    folioUpdateGalleries();

    // Trigger lightbox.
    new VenoBox({
        selector: ".is-style-folio-lightbox a"
    });
});