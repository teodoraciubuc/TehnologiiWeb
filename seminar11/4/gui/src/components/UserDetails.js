function UserDetails({user}){
    if(!user){
        return <div className="user-details">
            Select a user!
        </div>
    }

    return (
        <div className="user-details">
            <h2>User details</h2>
            <p>Username: {user.username}</p>
            <p>Full Name: {user.fullName}</p>
            <p>Type: {user.type}</p>
            <p>Created: {user.createdAt}</p>
            <p>Updated: {user.updatedAt}</p>
        </div>
    )
}

export default UserDetails;