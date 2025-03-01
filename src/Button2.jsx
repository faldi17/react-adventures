import { useEffect, useState } from "react"

function Button2() {
    const [countLike, setCountLike] = useState(0)
    const [countDislike, setCountDislike] = useState(0)
    useEffect(() => {
        console.log(`Keren udah ${countLike} like | ${countDislike} dislike`)
    }, [countLike, countDislike])

    return (
        <>
            <button onClick={() => setCountLike(countLike + 1)}>
                {countLike} Like 👍
            </button>
            <button onClick={() => setCountDislike(countDislike + 1)}>
                {countDislike} Dislike 👎
            </button>
        </>
    )
}

export default Button2