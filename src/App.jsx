import { createContext, useContext, useState } from "react"

function Child1() {
    const data = useContext(Context)
    return (
        <>
            <div>Child 1: {data.nama}</div>
            <Child2 />
        </>
    )
}
function Child2() {
    const data = useContext(Context)
    return (
        <>
            <div>Child 2: {data.nama}</div>
            <Child3 />
        </>
    )
    
}
function Child3() {
    const data = useContext(Context)

    function clickHandler() {
        if (data.nama == "Zulfan") {
            data.setNama("Silam")
        } else {
            data.setNama("Zulfan")
        }
    }
    return (
        <>
            Child 3: Halo {data.nama} umur kamu {data.umur} <br />
            <button onClick={clickHandler}>Ganti Nama</button>
        </>
    )
}

const Context = createContext()
function App() {
    const [nama, setNama] = useState("Zulfan")
    return (
        <>
            <Context.Provider value={{ nama, setNama, umur: 22 }}>
                <Child1 name="Faldi" />
            </Context.Provider>
        </>
    )
}

export default App