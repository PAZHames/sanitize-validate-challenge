function home(posts, errors = {}, values = {}) {
  const title = "All posts";
  const content = /*html*/ `
    <h2>New post</h2>
    <form method="POST">
      <p>
        <label for="nickname">Nickname</label>
        <input id="nickname" name="nickname" value = "${values.nickname ? sanitize(values.nickname): ""}">
        ${validate(errors.nickname)}
      </p>
      <p>
        <label for="message">Message</label>
        <textarea id="message" name="message">
        ${values.message ? sanitize(values.message): ""}
        </textarea>
        ${validate(errors.message)}
      </p>
      <button>Send</button>
    </form>
    <h2>All posts</h2>
    <ul>
      ${posts.map(postItem).join("")}
    </ul>
  `;
  return layout(title, content);
}

function postItem(post) {
  const date = new Date(post.created);
  const prettyDate = date.toLocaleString("en-GB");
  return `
    <li>
      <p>${post.message}</p>
      <p>—${post.nickname} | ${prettyDate}</p>
    </li>
  `;
}

function layout(title, content) {
  return /*html*/ `
    <!doctype html>
    <html>
      <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
      </head>
      <body>
        ${content}
      </body>
    </html>
  `;
}

function sanitize(message) {
  return message ? message.replace(/</g, "&lt;") : "";
}

function validate(message) {
  if (message) {
    if (message) {
      return `<span style="color: red">${message}</span>`;
    } else {
      return "";
    }
  }
}

module.exports = { home };
