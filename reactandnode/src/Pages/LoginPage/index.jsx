import React, {useState, useContext} from "react";
import '../LoginPage/Styles.css'
import { AuthContext } from "../../Contexts/auth";


const LoginPage = () =>{

    const {authenticated, login} = useContext(AuthContext)

    // manipulando o campo email e senha com hook e ligando aos campos
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //tirar o padrão do form
    const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Submit", {email, password});

    //integração com o contexto/api
    login(email, password)
    }
    
    return (
        
    <div id="login">
        <div id="title">
        <h3>Sign in</h3>
        </div>
        <p className="senha">{String(authenticated)}</p>
        <form className="form" onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            
            <div className="field">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
            </div>
            <div className="actions">
                <button type="submit">Log in</button>
            </div>

        </form>
    </div>
    )
};


export default LoginPage;