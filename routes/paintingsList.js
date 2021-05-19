const html = require("html-template-tag");

module.exports = (post) => html`<!DOCTYPE html>
    <html>
      <head>
            <title>
                ${painting.title}
            </title>
            <link rel="stylesheet" href="../style.css">
        </head>

      <body>
      <div class="paintings">
        <header>
          ${painting.title}
        </header>
          <div class="each-painting">
            <p>
              <img src="/${painting.id}.jpg"/>
              <small>Pablo Picasso | ${painting.year}</small>
            </p>

            <p>
              ${painting.caption}
            </p>

            <small>
                <a href="/">Return to menu</a>
            </small>
          </div>
        </div>
      </body>
    </html>`;
    