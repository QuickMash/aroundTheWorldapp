import { SplashScreen } from '@capacitor/splash-screen';

document.addEventListener('DOMContentLoaded', async () => {
  const userSignedUp = localStorage.getItem('userSignedUp');

  if (!userSignedUp) {
    renderSignupForm();
  } else {
    renderWelcomeScreen();
  }
});

function renderSignupForm() {
  document.getElementById("main").style = "display: none;";
  const signupElement = document.createElement('div');
  signupElement.id = 'signup-container';
  signupElement.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color: white;
    font-family: Arial, sans-serif;
    padding: 1rem;
    box-sizing: border-box;
  `;
  signupElement.innerHTML = `
    <h1 style="font-size: 2.5rem; margin-bottom: 1rem; text-align: center;">Around the World</h1>
    <p style="font-size: 1rem; margin-bottom: 2rem; text-align: center;">Welcome to Around the World! A large-scale manhunt app.</p>
    <form id="signup-form" class="row g-3 needs-validation" novalidate style="width: 100%; max-width: 400px;">
      <div class="form-group" style="margin-bottom: 1rem;">
        <label for="server" class="form-label" style="font-weight: bold;">Server</label>
        <input type="text" placeholder="Server" class="form-control" id="server" required style="padding: 0.5rem; border-radius: 5px; border: none; width: 100%;">
      </div>
      <div class="form-group" style="margin-bottom: 1rem;">
        <label for="uname" class="form-label" style="font-weight: bold;">Username</label>
        <input type="text" placeholder="Username" class="form-control" id="uname" required style="padding: 0.5rem; border-radius: 5px; border: none; width: 100%;">
      </div>
      <div class="form-group" style="margin-bottom: 1rem;">
        <label for="passcode" class="form-label" style="font-weight: bold;">Passcode</label>
        <input type="password" placeholder="Passcode" class="form-control" id="passcode" required style="padding: 0.5rem; border-radius: 5px; border: none; width: 100%;">
      </div>
      <button class="btn btn-primary" type="submit" style="padding: 0.7rem 1.5rem; background-color: #ff6f61; border: none; border-radius: 5px; font-size: 1rem; cursor: pointer; width: 100%;">Connect</button>
      <small style="display: block; margin-top: 1rem; font-size: 0.9rem; text-align: center;">Connect to the server, and the fun can begin!</small>
    </form>
  `;
  document.body.appendChild(signupElement);

  const signupForm = document.getElementById('signup-form');
  signupForm.addEventListener('submit', handleSignupSubmit);
}

function handleSignupSubmit(event) {
  event.preventDefault();
  localStorage.setItem('userSignedUp', 'true');
  alert('Thank you for signing up!');
  document.getElementById('signup-container').remove();
  renderWelcomeScreen();
}

function renderWelcomeScreen() {
  const welcomeElement = document.createElement('div');
  welcomeElement.id = 'welcome-container';
  welcomeElement.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #ff6f61, #ff9966);
    color: white;
    font-family: Arial, sans-serif;
    padding: 1rem;
    box-sizing: border-box;
  `;
  welcomeElement.innerHTML = `
    <h1 style="font-size: 2.5rem; margin-bottom: 1rem; text-align: center;">Welcome to Around the World!</h1>
    <p style="font-size: 1rem; margin-bottom: 2rem; text-align: center;">Looks like you are new to this game!</p>
    <div class="account" style="text-align: center;">
      <div class="pfp" style="margin-bottom: 1rem;">
        <img id="user-pfp" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDQiIGZpbGw9IiNEM0QzRDMiIC8+CiAgPHBhdGggZD0iTTUwIDMwYzExLjA0IDAgMjAgOC45NiAyMCAyMHMtOC45NiAyMC0yMCAyMFMzMCA0MS4wNCAzMCAzMFMzOC45NiAzMCA1MCAzMHptMCAzMGM4LjI4IDAgMTUtNi43MiAxNS0xNXMtNi43Mi0xNS0xNS0xNS0xNSA2LjcyLTE1IDE1IDYuNzIgMTUgMTUgMTV6IiBmaWxsPSIjRkZGIiAvPgo8L3N2Zz4=" alt="Default Profile Picture" style="width: 80px; height: 80px; border-radius: 50%; border: 2px solid white;" />
        <p style="margin-top: 0.5rem; font-size: 0.9rem;">No profile picture yet. Click to upload!</p>
      </div>
      <div onclick="" class="user-info">
        <h2 id="username" style="font-size: 1.2rem; margin-bottom: 0.5rem;">Username</h2>
        <p id="server" style="font-size: 0.9rem; margin-bottom: 1.5rem;">Server</p>
        <button id="start-adventure" class="btn btn-primary" style="padding: 0.7rem 1.5rem; background-color: #6a11cb; border: none; border-radius: 5px; font-size: 1rem; cursor: pointer; width: 100%;">Start Adventure</button>
      </div>
    </div>
  `;
  document.body.appendChild(welcomeElement);

  const startButton = document.getElementById('start-adventure');
  startButton.addEventListener('click', () => {
    document.getElementById("main").style = "display: block;";
    document.getElementById('welcome-container').remove();
    SplashScreen.hide();
  });
}
