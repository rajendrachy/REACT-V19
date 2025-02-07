// ----------------GET-----------------------------------

// function submit() {
//     const name = document.getElementById('name').value;
//     const username = document.getElementById('username').value;
   
//     console.log(`Submitted Data: Name = ${name}, Username = ${username}`);

//     axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
//             console.log('Fetched User Data:', response.data);
//         })    
// }



//----------------POST--------------------
function submit() {
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
   
    console.log(`Submitted Data: Name = ${name}, Username = ${username}`);

    axios.post('https://jsonplaceholder.typicode.com/users', {
        name: name,
        username: username,
    })
    .then(response => {
        console.log('Response from server:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}






