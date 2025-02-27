function MenuResto() {
    const styleMenuItem = {
        backgroundColor: "#333",
        color: "#fff",
        padding: "10px",
        borderRadius: "10px",
        marginBottom: "5px",
    }

    const menu = [
        { nama: 'Nasi Bakar 🍘', harga: 'Rp. 10.000' },
        { nama: 'Mie Ayam 🍜', harga: 'Rp. 15.000' },
        { nama: 'Ayam Goreng 🍗', harga: 'Rp. 20.000' },
    ]

    return (
        <>
            {
                menu.map((item, index) => {
                    return (
                        <div style={styleMenuItem} key={index}>
                            <div><b>Nama Menu: </b> <em>{item.nama}</em></div>
                            <div><b>Harga: </b> <em>{item.harga}</em></div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default MenuResto