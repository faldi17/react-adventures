import { useRef } from "react"

function App() {
    const message = useRef(null)
    const displayPesan = useRef(null)

    function clickHandler() {
        console.log(message.current.value)
        displayPesan.current.textContent = `Pesan: ${message.current.value}`

        displayPesan.current.style.padding = "5px"
        displayPesan.current.style.marginTop = "5px"
        displayPesan.current.style.backgroundColor = "black"
        displayPesan.current.style.color = "white"
    }

    return (
        <>
            <div><input type="text" ref={message} placeholder="kirim pesan kamu" /></div>
            <div><button onClick={clickHandler}>Klik aku 🤗</button></div>
            <div ref={displayPesan}></div>
        </>
    )
}

export default App