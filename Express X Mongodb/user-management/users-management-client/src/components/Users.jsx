import React, { use, useState } from 'react';

const Users = ({ usersPromise }) => {
    const initialUsers = use(usersPromise);
    const [users, setUsers] = useState(initialUsers)

    const handleAddUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email);

        const newUser = { name, email };

        // send data to the server
        fetch('http://localhost:3000/users', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data after post', data)
                const newUsers = [...users, data];
                setUsers(newUsers);
                e.target.reset();
            })
    }

    return (
        <div>
            <div>
                <h3>Add a user</h3>
                <form onSubmit={handleAddUser}>
                    <input name='name' type="text" />
                    <br />
                    <input type="email" name="email" id="" />
                    <br />
                    <button>Add user</button>
                </form>
            </div>
            <div>
                {
                    users.map(user => <p key={user.id}>{user.name} Email: {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;




/**
 * have to send request object to the server
 * 1. mention method: post
 * 2. mention header: about json data in the property of content-type: application/json
 * 3. body: JSON.stringify(newUser)
 * 
 * --------------
 * on the server side use json as middleware
 * app.use(express.json())
 * 
*/