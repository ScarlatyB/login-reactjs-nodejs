import React, {useContext} from "react";
import { AuthContext } from "../../Contexts/auth";


const HomePage = () =>{
    //recupero o logout vindo do Authcontext e chamo ele na funcao de handleLogout
    const {logout} = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }

    return( 
    <>
    <h1>HomePage</h1>
    <button onClick={handleLogout}>Logout</button>
    </>
    )
};


export default HomePage;