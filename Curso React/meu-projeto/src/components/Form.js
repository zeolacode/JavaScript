import { useState } from 'react'

function Form(){
    
    function CadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = useState("valor default")
    const [password, setPassword] = useState("valor default")
    
    
    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={CadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome" 
                    //value={name}
                    onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Digite a sua senha"
                    onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
}

export default Form