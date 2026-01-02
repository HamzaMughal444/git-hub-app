let form = document.querySelector("#form");
let input = document.querySelector("#input");
let result = document.querySelector(".result");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let apiUrl = `https://api.github.com/users/${input.value}`;

  fetch(apiUrl)
    .then((res) => {
      return res.json();
    })

    .then((res) => {
      let obj = {
        image: `${res.avatar_url}`,
        name: `${res.name}`,
        company: `${res.company}`,
        location: `${res.location}`,
        bio: `${res.bio}`,
        blog : `${res.blog}`
      };

      console.log(res);
      result.innerHTML = `     <div class="card">
    <div class="avatar">
      <img src="${obj.image}" alt="Avatar">
    </div>
    <h2 class="name">${obj.name}</h2>
    <p class="company">Company: ${obj.company}</p>
    <p class="location">📍 ${obj.location}</p>
    <p class="bio">${obj.bio}</p>
    
    <div class="stats">
      <div>
        <h3>${res.followers}</h3>
        <p>Followers</p>
      </div>
      <div>
        <h3>${res.following}</h3>
        <p>Following</p>
      </div>
    </div>

    <a href="${obj.blog}" target="_blank" class="blog">Visit Blog</a>
  </div>`;
    })

    .catch((err) => {
      console.log(err);
    });
});
