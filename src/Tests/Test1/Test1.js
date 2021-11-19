import { useState } from 'react'

const Test1 = () => {

    const [number, setNumber] = useState(0);

    const addNumber = (num) => {
        // TODO
        // must add the number that comes by parameter to the state 
        setNumber(num);
    }

    const substractNumber = (num) => {
        // TODO
        // must substract the number that comes by parameter to the state 
        setNumber(number - num);

    }

    const checkEven = () => {
        // TODO
        // must check if state is even or not and return the answer
         
        return (number %2 == 0);
    }

    const checkIfIsPositive = () => {
        // must check if state is positive or not and return the answer
        return (number>0);
    }

    return {
        number,
        addNumber,
        substractNumber,
        checkEven,
        checkIfIsPositive
    }
}

export default Test1;
