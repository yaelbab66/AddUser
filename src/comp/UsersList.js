const UsersList = (props) => {
 
    const showUser = props.item.map((user) => {
        return <li key={user.id}>{user.name} ({user.age} years old)</li>
    });

    

    return(
        <ul>
            {showUser}
        </ul>
    );
}

export default UsersList;
