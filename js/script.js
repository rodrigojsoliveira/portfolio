const GITHUB_PATH = 'https://github.com/rodrigojsoliveira/';

// Simple function used to open a new browser window or tab(depending on user settings), taking the user to the appropriate Github repository.
function openGithubRepo (repository) {
	window.open(GITHUB_PATH + repository);
}