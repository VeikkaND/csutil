import { useNavigate } from "react-router"

function NavBar() {
    const navigate = useNavigate()
    const handleReturn = () => {
        navigate("/")
    }

    return(
        <div className="navbar">
            <h1 onClick={handleReturn}>CSutil</h1>
        </div>
    )
}

export default NavBar