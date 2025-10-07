function getSortedPostsByTitleLength(callback) {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      const sorted = data.sort((a, b) => b.title.length - a.title.length);
      callback(sorted);
    })
} //posts

const d = pm.response.json();
const s = d.sort((a, b) => a.name.localeCompare(b.name));
pm.response.json = () => s;//comments
