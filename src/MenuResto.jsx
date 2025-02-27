// import './MenuResto.css'

function MenuResto() {
    const styleMenu = {
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px",
        borderRadius: "10px",
    }

    const isMakanan = false;

    return (
        // <div className="menu-item">
        <div style={styleMenu}>
            <div><b>Nama Menu: </b> <em>Nasi Bakar 🍘</em></div>
            {(isMakanan == true) && (<div>Tipe: Makanan</div>)}
        </div>
    )
}

export default MenuResto