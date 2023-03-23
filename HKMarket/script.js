const APIURL =
  'https://use1-common-restapi.prod.recurforever.com/platform-lambdas'

const form = document.getElementById('form')
const main = document.getElementById('main')
const search = document.getElementById('search')

// getUser('bradtraversy')
// fetch("http://example.com/movies.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

async function getMarketPlace(token_id) {
  const requestString = `${APIURL}/metadata/token/APPLE/${token_id}`
  try {
    // using fetch which is built into browsers nowadays
    const response = await fetch(requestString, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
    })
    console.log(response)
    const body = await response.json()
    // createUserCard(data)
    // getRepos(username)
  } catch (err) {
    createErrorCard('Problem Fetching')
  }
}

function createUserCard(user) {
  const cardHTML = `<div class="card">
    <div>
        <img src="${user.avatar_url}" alt="'${user.name}" class="avatar" />
    </div>  
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>
        <div id="repos">
        </div>
    </div>
</div>`
  main.innerHTML = cardHTML
}

function createErrorCard(msg) {
  const cardHTML = `<div class="card">
    <h1>${msg}</h1>
    </div>`
  main.innerHTML = cardHTML
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos')
  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement('a')
    repoEl.classList.add('repo')
    repoEl.href = repo.html_url
    repoEl.target = '_blank'
    repoEl.innerText = repo.name

    reposEl.appendChild(repoEl)
  })
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created')
    addReposToCard(data)
  } catch (err) {
    createErrorCard('Problem fetching repos')
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const token_id = search.value
  if (!token_id) return
  getMarketPlace(token_id)
  search.value = ''
})
