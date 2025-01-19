// Mock user data with specific redirect URLs
const users = [
    { username: 'Sanooja', password: '123', name: 'Sanooja', redirectUrl: 'home.html' },
    { username: 'user2', password: 'pass456', name: 'Jane Smith', redirectUrl: 'dashboard-user2.html' },
    { username: 'admin', password: 'admin123', name: 'Admin', redirectUrl: 'admin-dashboard.html' },
];

// Validate login credentials and redirect to user-specific page
function submitLogin() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Check if username and password match a user
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert(`Welcome, ${user.name}! Redirecting to your dashboard...`);
        window.location.href = user.redirectUrl; // Redirect to the user's specific page
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

// Switch to the registration form (mock-up, can be implemented)
function switchToRegister() {
    alert('Redirecting to registration form...');
}