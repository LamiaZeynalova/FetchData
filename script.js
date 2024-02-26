// Table//

const Table = document.getElementById("Table")
const Tr = document.getElementById("Tr");
const tbody = document.getElementById("tbody");

fetch("https://northwind.vercel.app/api/products").then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < Object.keys(data[0]).length; i++) {
      const Th = document.createElement("th");
      Th.textContent = Object.keys(data[0])[i];
      Tr.appendChild(Th);
    }
     data.forEach((element) => {
     const tr = document.createElement("tr");
      for (const key in element) {
    
    const td = document.createElement("td");
        if (typeof element[key] === "object") {
          td.textContent = "id: " + element[key].id;
        
        } else {
          td.textContent = element[key];
        }
        tr.appendChild(td);
      } tbody.appendChild(tr);
    });
  })
  .catch(error => console.error('Error:', error));


//   Card //

fetch('https://api.tvmaze.com/shows')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('cards');
    data.forEach(show => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${show.image.medium}" alt="${show.name}">
        <div class="card-body">
          <h5>${show.name}</h5>
          <p>Language: ${show.language}</p>
          <p>Rating: ${show.rating.average}</p>
          <p>Genres: ${show.genres.join(', ')}</p>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error:', error));