const ButtonsBar = ({setArtID}) => {

    const increase = () => {
        setArtID(prev => prev + 1)
    }
    const decrease = () => {
        setArtID(prev => prev - 1)
    }

    const bigLeap = () => {
        setArtID(prev => prev + 5)
    }
    const wayBack = () => {
        setArtID(prev => prev - 5)
    }

    return (
        <div>
            <button onClick={wayBack()}className="btn">WAY Back</button>
            <button onClick={decrease()}className="btn">Backward</button>
            <button onClick={increase()}className="btn">Forward</button>
            <button onClick={bigLeap()}className="btn">BIG Leap</button>
        </div>
    )
}

export default ButtonsBar