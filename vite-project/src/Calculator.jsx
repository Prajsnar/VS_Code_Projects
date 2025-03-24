import { useState } from 'react';

function Calculator() {

    const [typedNumber, setTypedNumber] = useState("");
    const [status, setStatus] = useState("");
    const [previousNumber, setPreviousNumber] = useState("");
    const [result, setResult] = useState(null);

    function setOperator(e) {
        if (typedNumber) {
            switch (e.target.value) {
                case "C":
                    setStatus("");
                    setTypedNumber("");
                    setPreviousNumber("");
                    break;

                case "X":
                    setPreviousNumber(e.target.textContent);
                    setTypedNumber("");
                    setStatus("X");
                    break;

                case "/":
                    setPreviousNumber(e.target.textContent);
                    setTypedNumber("");
                    setStatus("/");
                    break;

                case "*":
                    setPreviousNumber(e.target.textContent);
                    setTypedNumber("");
                    setStatus("*");
                    break;

                case "+":
                    setPreviousNumber(e.target.textContent);
                    setTypedNumber("");
                    setStatus("+");
                    break;

                case "-":
                    setPreviousNumber(e.target.textContent);
                    setTypedNumber("");
                    setStatus("-");
                    break;

                case "=":
                    setResult(result)
                    break;
            }
        }
    }

    const showNumber = (e) => {
        setTypedNumber(typedNumber + e.target.textContent)
    }


    /* 
    zrobić handleStatus, który będzie zmieniał po onClick: ' + - * / ' w statusie
    i zrobic samo handleSum który będzie rozważał i wykonywał kod w zależnosci
    od stanu status
    

    const handleMultiply = () => {
        if (number) {
            setNumberAction(number);
            setStatus("*")
            setResult((prev) => (prev ? prev * Number(number) : Number(number)));
            setNumber("");
        }
    } 
        */

    /*
    const handleAdd = () => {
        if (number) {
            setNumberAction(number);
            setStatus("+")
            setResult((prev) => (prev ? prev + Number(number) : Number(number)));
            setNumber("");
        }
    }

    const handleSum = () => {
        if (number) {
            if (status === "*") {
                setResult(Number(result) * Number(number));
                setNumber("");
                setStatus("")
            } else if (status === "+") {
                setResult(Number(result) + Number(number));
                setNumber("")
                setStatus("")
            } else if (status === "-") {
                setResult(Number(result) - Number(number));
                setNumber("")
                setStatus("") 
            } else if (status === "/") { 
                setResult(Number(result) / Number(number));
                setNumber("")
                setStatus("")
            }
        }
    }

    const handleDivide = () => {
        if (number) {
            setNumberAction(number);
            setStatus("/")
            setResult((prev) => (prev ? prev / Number(number) : Number(number)));
            setNumber("");
        }
    }

    const clearNumber = () => {
        setNumber("");
        setResult("");
        setStatus("");
    }

    const addNumbers = (e) => {
        setNumber(number + e.target.textContent);
    }
        */
    return (
        <>
            <div className='calc-container'>
                <div className="calc-interface">
                    <p>Wynik: {result}</p>
                    <p>Poprzednie numery: {previousNumber}</p>
                    <p>Wpisywanie: {typedNumber} </p>
                    <p>Status: {status}</p>
                    <div className='calc-buttons'>
                        <button onClick={(e) => showNumber(e)}>1</button>
                        <button onClick={(e) => showNumber(e)}>2</button>
                        <button onClick={(e) => showNumber(e)}>3</button>
                        <button onClick={(e) => showNumber(e)}>4</button>
                        <button onClick={(e) => showNumber(e)}>5</button>
                        <button onClick={(e) => showNumber(e)}>6</button>
                        <button onClick={(e) => showNumber(e)}>7</button>
                        <button onClick={(e) => showNumber(e)}>8</button>
                        <button onClick={(e) => showNumber(e)}>9</button>
                        <button onClick={(e) => showNumber(e)}>0</button>
                        <button onClick={(e) => setOperator(e)}>C</button>
                        <button onClick={(e) => setOperator(e)}>X</button>
                        <button onClick={(e) => setOperator(e)}>/</button>
                        <button onClick={(e) => setOperator(e)}>-</button>
                        <button onClick={(e) => setOperator(e)}>+</button>
                        <button onClick={(e) => setOperator(e)}>=</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator