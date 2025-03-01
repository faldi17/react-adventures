function Button() {
    function clickHandler() {
        const nama = prompt('Masukkan nama Anda: ')
        alert(`Button diklik oleh ${nama}!`)
    }

    return (
        <button onClick={clickHandler}>Klik Saya 😁</button>
    )
}

export default Button