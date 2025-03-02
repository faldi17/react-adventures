import { useState } from "react"
import ChildComponent from "./ChildComponent"

function App() {
    const [likeCounter, setLikeCounter] = useState(0)
    const [subscribeCounter, setSubscribeCounter] = useState(0)
    const [name, setName] = useState("RumahMu")

    function handlerName() {
        let channelName = ""
        if (name == "RumahMu") {
            channelName = "RumahNya"
        } else {
            channelName = "RumahMu"
        }

        setName(channelName)
        console.log(`setname run ${name}`)
    }

    return (
        <>
            <p>
                <button onClick={() => setLikeCounter(likeCounter + 1)}>{likeCounter} Like 👍</button>
            </p>
            <p>
                <button onClick={() => setSubscribeCounter(subscribeCounter + 1)}>{subscribeCounter} Subcribe ▶️</button>
            </p>
            <ChildComponent name={name} />
            <button onClick={handlerName}>Ganti Nama Channel</button>
        </>
    )
}

export default App