// gallery.js
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        {
            large: 'images/flowers-yellow-large.jpg',
            small: 'images/flowers-yellow-small.jpg',
            caption: 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany'
        },
        {
            large: 'images/flowers-red-large.jpg',
            small: 'images/flowers-red-small.jpg',
            caption: 'Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany'
        },
        {
            large: 'images/flowers-white-large.jpg',
            small: 'images/flowers-white-small.jpg',
            caption: 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany'
        },
        {
            large: 'images/flowers-purple-large.jpg',
            small: 'images/flowers-purple-small.jpg',
            caption: 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany'
        },
        {
            large: 'images/flowers-pink-large.jpg',
            small: 'images/flowers-pink-small.jpg',
            caption: 'Market in Münster, North Rhine-Westphalia, Germany'
        }
    ];

    const featuredImage = document.getElementById('featured');
    const caption = document.getElementById('caption');
    const thumbnails = document.getElementById('thumbnails');

    function buildThumbnails(images) {
        thumbnails.innerHTML = '';
        images.forEach((image, index) => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = image.small;
            img.alt = image.caption;
            img.setAttribute('data-large', image.large);
            img.setAttribute('data-caption', image.caption);
            img.style.filter = index === 0 ? 'none' : 'grayscale(100%)';
            li.appendChild(img);
            thumbnails.appendChild(li);
        });
    }

    thumbnails.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            const largeImage = event.target.getAttribute('data-large');
            const imageCaption = event.target.getAttribute('data-caption');
            featuredImage.src = largeImage;
            caption.textContent = imageCaption;

            // Apply CSS filter to inactive thumbnails
            const allThumbnails = thumbnails.getElementsByTagName('img');
            for (let thumbnail of allThumbnails) {
                thumbnail.style.filter = 'grayscale(100%)';
            }
            event.target.style.filter = 'none';
        }
    });

    buildThumbnails(images);
    // Set the initial featured image
    featuredImage.src = images[0].large;
    caption.textContent = images[0].caption;
});
