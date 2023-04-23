const resultsContainer = document.querySelector(".eventContainer");

const url = "https://cms-ca.flywheelsites.com/wp-json/wp/v2/posts/";

async function fetchBlogs() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    let html = "";
    json.forEach(blog => {
      html += `
      <div class="post">

          <div class="blogContainer">
          <h2>${blog.title.rendered}</h2>
            <p class"date">This event was added on ${new Date(blog.date).toLocaleDateString()}</p>
            <a href="${blog.link}" class="info">Click here to read more about this event.</a>
          </div>
          </div>
      `;
    });

    resultsContainer.innerHTML = html;
  } catch (error) {
    resultsContainer.innerHTML = `Error: ${error}`;
  }
}

fetchBlogs();