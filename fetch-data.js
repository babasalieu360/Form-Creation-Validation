document.addEventListener('DOMContentLoaded', async () => {
    try {
        // 1. Define API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        
        // 2. Select display container
        const dataContainer = document.getElementById('api-data');
        
        // 3. Fetch data with error handling
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        // 4. Process JSON data
        const users = await response.json();
        
        // 5. Clear loading message
        dataContainer.innerHTML = '';
        
        // 6. Create and populate user list
        const userList = document.createElement('ul');
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });
        
        // 7. Display results
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // 8. Handle errors
        const dataContainer = document.getElementById('api-data');
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Fetch error:', error);
    }
});