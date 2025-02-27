// import './MenuResto.css'

function MenuResto() {
    const styleMenu = {
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px",
        borderRadius: "10px",
    }

    return (
        // <div className="menu-item">
        <div style={styleMenu}>
            <div><b>Nama Menu: </b> <em>Nasi Bakar 🍘</em></div>
            <div><b>Harga: </b> <em>Rp. 20.000</em></div>
        </div>
    )
}

export default MenuResto