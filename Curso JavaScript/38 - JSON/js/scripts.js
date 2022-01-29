const obj = [ 
    {
        nome: "Pedro",
        idade: 24,
        esta_trabalhando: true,
        detalhes_profissao:{
            profissao: "Eng. Eletrônico",
            empresa: "Empresa X"
        },
        hobbies: ["Programar", "Correr", "Ler"],
    },
    {
        nome: "João",
        idade: 30,
        esta_trabalhando: true,
        detalhes_profissao:{
            profissao: "Eng. Civil",
            empresa: "Empresa X"
        },
        hobbies: ["Desenhar", "Correr", "Ler"],
    }
    ]

    console.log(obj)
    // JSON
    // converter para json
    const jsonData = JSON.stringify(obj)

    console.log(jsonData);
    console.log(typeof jsonData);

    // converter json para objeto 
    const objData = JSON.parse(jsonData);

    console.log(objData)
    console.log(typeof objData)

    objData.map((pessoa) => {
        console.log(pessoa.nome)
    })  