import { useCallback, useState } from "react"
import ChildComponent from "./ChildComponent"

function App() {
    const [likeCounter, setLikeCounter] = useState(0)
    const [subscribeCounter, setSubscribeCounter] = useState(0)
    const [name, setName] = useState("RumahMu")

    // useCallback(fungsi(), [dependencies])
    const handlerName = useCallback(() => {
        let channelName = ""
        if (name == "RumahMu") {
            channelName = "RumahNya"
        } else {
            channelName = "RumahMu"
        }

        setName(channelName)
        console.log(`setname run ${name}`)
    }, [name])

    return (
        <>
            <p>
                <button onClick={() => setLikeCounter(likeCounter + 1)}>{likeCounter} Like 👍</button>
            </p>
            <p>
                <button onClick={() => setSubscribeCounter(subscribeCounter + 1)}>{subscribeCounter} Subcribe ▶️</button>
            </p>
            <ChildComponent name={name} aksi={handlerName} />
        </>
    )
}

export default App