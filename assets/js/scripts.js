fetch('/posts/posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('posts');

    posts.forEach(post => {
      const div = document.createElement('div');
      div.className = 'post';

      div.innerHTML = `
        <h2><a href="${post.url}">${post.title}</a></h2>
        <p>${post.excerpt}</p>
        <small>${post.date}</small>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error('Failed to load posts', err);
  });
