import { useState } from 'react'

const Test2 = () => {

    const [users, setUsers] = useState([]);

    const handleSetUsers = (allUsers) => {
        // Must set users 
        setUsers(allUsers);
    }

    const returnTheYoungest = () => {
        // Must return the youngest User
        const nuevoArray1 = [...users] 

        const nuevoArrayAMostrar = nuevoArray1.sort(function(a, b) {
            if(a.age > b.age) {
                return 1;
            } 
            if (a.age < b.age) {
                return -1;
            } 
        })

        // setUsers(nuevoArrayAMostrar);

        console.log("Julieta",  nuevoArrayAMostrar[0]);
        return nuevoArrayAMostrar[0];
    }

    const returnArrayOfAges = () => {
        // return an age-only array
        const arrayNew = users.map(u => u.age);
        console.log (arrayNew);
        return (arrayNew);
    }

    const mustSortUsersByAge = () => {
        // Must set new State sorted
       const copyUsers = [...users];

       copyUsers.sort(function(a, b) {
            if(a.age > b.age) {
                return 1;
            } 
            if (a.age < b.age) {
                return -1;
            } 
        })

        console.log (copyUsers);
        setUsers(copyUsers);
    }


    return {
        users,
        handleSetUsers,
        returnTheYoungest,
        returnArrayOfAges,
        mustSortUsersByAge
    }
}

export default Test2
