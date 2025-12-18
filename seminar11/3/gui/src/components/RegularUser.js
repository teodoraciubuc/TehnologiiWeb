import User from "./User";
import './RegularUser.css'

function RegularUser ({users}){
    const regularUser = users.filter( e => e.type === 'regular-user');

    return (
        <div className="regular-user">
            <h2>Regular Users</h2>
            {regularUser.map(e => (<User key ={e.id} item={e} />))}
        </div>
    )
}

export default RegularUser;