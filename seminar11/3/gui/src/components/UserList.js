import { useEffect, useState } from "react";
import User from './User';
import RegularUser from "./RegularUser";
import PowerUser from "./PowerUser";

import './UserList.css'

const SERVER = 'http://localhost:8080'

function UserList(){
    const [users, setUsers] = useState([])

    const getUsers = async () =>{
        const response = await fetch(`${SERVER}/users`);
        const data = await response.json();
        setUsers(data);
    }

    useEffect(()=>{
        getUsers()
    },[])

    return (
        <div className='user-list'>
            <RegularUser users={users}/>
            <PowerUser users={users}/>
        </div>
    )
}

export default UserList;