import User from './User';
import './PowerUser.css'

function PowerUser({users}){
    const powerUser = users.filter(e=>e.type === 'power-user');
    
    return (
        <div className="power-user">
            <h2>Power Users</h2>
            {powerUser.map(e=>( <User key={e.id} item={e} />))}
        </div>
    )
}

export default PowerUser;