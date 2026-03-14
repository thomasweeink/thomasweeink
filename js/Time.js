// Function to update greeting
function updateGreeting() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[now.getDay()];
    
    // Determine time of day
    const hour = now.getHours();
    let timeOfDay;
    
    if (hour >= 5 && hour < 12) {
        timeOfDay = 'Morning';
    } else if (hour >= 12 && hour < 18) {
        timeOfDay = 'Afternoon';
    } else if (hour >= 18 && hour < 22) {
        timeOfDay = 'Evening';
    } else {
        timeOfDay = 'Night';
    }
    
    // Update the element
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = `Have a great ${currentDay}, ${timeOfDay}!`;
}

// Run when page loads
updateGreeting();