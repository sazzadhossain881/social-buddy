import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Home = () => {
    const [users,setUsers]=useState([]);
    useEffect(() => {
        const url='https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(Response => Response.json())
        .then(data => setUsers(data))
    })
    return (
        <div>
            {
                users.map(user =><User user={user}></User> )
            }
        </div>
    );
};

export default Home;