/* eslint-disable react/prop-types */
function Mood({ hari, mood }) {
    const styleMenuItem = {
        fontSize: "20px",
    }
    return (
        <div style={styleMenuItem}>Hari: {hari} / Mood: {mood}</div>
    )
}

export default Mood