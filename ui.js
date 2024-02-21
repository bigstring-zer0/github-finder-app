class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }
}

function showProfile(user) {
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repositories"></div>
    `;
}

function showRepositories(repositories) {
    let text = '';

    repositories.forEach(function (repository) {
        text += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repository.html_url}" target="_blank">${repository.name}</a>
                    </div>
                    <div class="col-md-6">
                    <span class="badge badge-primary">Starts: ${repository.stargazers_count}</span>
                    <span class="badge badge-secondary">Watchers: ${repository.watchers_count}</span>
                    <span class="badge badge-primary">Forks: ${repository.forms_count}</span>
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById('repositories').innerHTML = text;
}

