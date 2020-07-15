document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData)
document.getElementById('addPostForm').addEventListener('submit', addPost)

function fetchUserData(){
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // .then(data => data.forEach(e => console.log(e)))
        .then(users => {
            let output = '<h2>List of Users</h2>'
            output += '<ul>'
            users.forEach(user => {
                output += `
                    <li>
                        ${user.name}
                    </li>
                `
            })
            output += '</ul>'
            document.getElementById('response').innerHTML = output
        })
}

function addPost(e){
    e.preventDefault()
    let title = document.getElementById('title').value
    let body = document.getElementById('body').value
    const myPost = { title, body }
    fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myPost)
    })
        .then(response => response.json())
        .then(data => console.log(data))
}