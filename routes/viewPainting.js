const html = require("html-template-tag");

module.exports = (post) => html`<!DOCTYPE html>
    <html>
        <head>
            <title>
                Early Picasso
            </title>
            <link rel="stylesheet" href="../style.css">
        </head>

        <body>
            <div class="paintings">
            <header>
                Early Picasso
            </header>
            
            <ol>${paintings.map(painting => `
                <div class="painting-list">
                    <p>
                    <span class="each-painting">${painting.id}. </span>
                    <a href="/paintings/${painting.id}">${painting.title}</a>
                    <small>(${painting.year})</small>
                    </p>
                </div>`
                ).join('')}
            </ol>
            </div>
        </body>
    </html>`;
