
const Header = ({ handleDark}) => {
    return (
        <div className="notes">
            <h1 className="notes-title">Notes</h1>
            <button onClick={() => handleDark((prev) => !prev)} className="save">Toggle mode</button>
        </div>
    )
}
export default Header;