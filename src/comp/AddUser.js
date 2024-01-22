import React, {useState} from 'react'
const AddUser = props => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    function nameHandler(event){
        setName(event.target.value);
    }

    function ageHandler(event){
        setAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const userData = {
            id: Math.random.toString(),
            name: name,
            age: age,
        };

        props.onAddUser(userData);
        //delete form values
        setName('');
        setAge('');
        
        
    };

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Username</label>
                <input type='text' value={name} onChange={nameHandler} />
            </div>
            <div>
                <label>Age (Years)</label>
                <input type='number' value={age} onChange={ageHandler}/>
            </div>
            <button type="submit">Add User</button>
        </form>
    )
}

export default AddUser;