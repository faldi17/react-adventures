import { useState } from "react"

function Button() {
    const [counter, setCounter] = useState(0)

    let newCounter = 0
    function clickHandler() {
        newCounter = counter + 1
        console.log(`Saya di klik ${newCounter} kali`)
        setCounter(newCounter)
    }

    return (
        <button onClick={clickHandler}>Saya di klik {counter} 😁</button>
    )
}

export default Button