document.addEventListener('DOMContentLoaded', async function () {
    // Select the display container
    const dataContainer = document.getElementById('api-data');

    try {
        // API endpoint
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        // Fetch user data
        const response = await fetch(apiUrl);

        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse JSON data
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create list element
        const userList = document.createElement('ul');

        // Populate list with user names
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Display the list
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
});