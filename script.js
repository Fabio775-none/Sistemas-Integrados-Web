
const titulos = ["Agenda de Contatos","Biblioteca","Controle Financeiro","Catálogo de Filmes","Cadastro de Alunos"];
const labels = [
                  /*Agenda de contatos*/"Nome do contato:","Adicionar Contato:","Telefone:","Email:","agenda.png","Agenda",
                  /*Biblioteca*/ "Nome do livro:","Adicionar Livro:","Autor:","Emprestado:","biblioteca.png","Biblioteca",
                  /*Controle Finaceiro*/  "Descrição:","Adicionar Controle:","Valor:","Tipo:","controle.png","Controle_Financeiro",
                  /*Catalogo de filmes*/  "Nome do filme:","Adicionar Filme:","Ano:","Autor","filmes.png","Catalogo",
                  /*Cadrasto de alunos*/ "Nome do aluno:","Cadastrar Aluno:","Telefone:","Email:","alunos.png","Cadastro_de_alunos",
                ];

const txtTabela = [ /*Agenda de contatos*/ "Nome","Telefone","Email",
                     /*Biblioteca*/  "Livro","Autor","Emprestado",
                     /*Controle Finaceiro*/ "Descrição","Valor","Tipo",
                    /*Catalogo de filmes*/ "Filme","Ano","Autor",
];

let chaveStorage = "";


let carregar = (tela,titulo,texto1,texto2,texto3,texto4,texto5,texto6,texto7) => 
    {
       document.querySelector(".titulo").textContent = titulo;
       
         document.querySelector(".label1").textContent = texto1;
         document.querySelector(".subtitulo").textContent = texto2;
         document.querySelector(".label2").textContent = texto3;
         document.querySelector(".label3").textContent = texto4;
         
         tela.style.backgroundImage = `url('${texto5}')`;
         chaveStorage = texto6;
         document.querySelector(".input2").type = texto7;

   

    }

    let varglobal = "";
    let abrirTela = (tipo) => 
        {
            document.querySelector(".telaPrincipal").style.display = "flex";
               document.querySelector(".formulario1").style.display = "none";

               let tela = document.querySelector(".telaPrincipal");

                   if(tipo == "Agenda")
                    {
                        carregar(tela,titulos[0],labels[0],labels[1],labels[2],labels[3],labels[4],labels[5],"number"); 
                        carregarDados();
                        varglobal = tipo;
                        atualizarTabela();
                       
                    }
                     
                   if(tipo == "Biblioteca")
                    {
                        carregar(tela,titulos[1],labels[6],labels[7],labels[8],labels[9],labels[10],labels[11],'text'); 
                        carregarDados();
                         varglobal = tipo;
                        atualizarTabela();
                       
                      
                    }
                   
                   if(tipo == "Controle_Financeiro")
                    {
                        carregar(tela,titulos[2],labels[12],labels[13],labels[14],labels[15],labels[16],labels[17],"number");
                        carregarDados();
                          varglobal = tipo;
                        atualizarTabela();
                      
                    }
                   
                   if(tipo == "Catalogo")
                    {
                        carregar(tela,titulos[3],labels[18],labels[19],labels[20],labels[21],labels[22],labels[23],"text");
                        carregarDados();
                        varglobal = tipo;
                        atualizarTabela();
                        
                    }
                   
                   if(tipo == "Cadastro_de_alunos")
                    {
                        carregar(tela,titulos[4],labels[24],labels[25],labels[26],labels[27],labels[28],labels[29],"number");
                        carregarDados();
                        varglobal = tipo;
                        atualizarTabela();
                        
                    }

                   if(tipo == "Voltar")
                   {
                        document.querySelector(".telaPrincipal").style.display = "none";
                          document.querySelector(".formulario1").style.display = "flex";
                   }
   
        } 

        let limparTxt = () =>
            {
               document.querySelector(".input1").value = "";
               document.querySelector(".input2").value = "";
               document.querySelector(".input3").value = "";
               document.querySelector(".input4").value = "";
            }
           
                    let atualizarTabela = () =>
                        {
                           limparTxt(); 
                           if(varglobal == "Agenda")carregarTabela(txtTabela[0],txtTabela[1],txtTabela[2]);
                           if(varglobal == "Biblioteca")carregarTabela(txtTabela[3],txtTabela[4],txtTabela[5]);
                           if(varglobal == "Controle_Financeiro")carregarTabela(txtTabela[6],txtTabela[7] + " R$",txtTabela[8]);
                           if(varglobal == "Catalogo")carregarTabela(txtTabela[9],txtTabela[10],txtTabela[11]);
                           if(varglobal == "Cadastro_de_alunos")carregarTabela(txtTabela[0],txtTabela[1],txtTabela[2]);
                        }

        let array = JSON.parse(localStorage.getItem(chaveStorage)) || [];
            
        let adicionarItens = _ =>
            {
                      let item = [];

                        item[0] = document.querySelector(".input1").value;
                        item[1] = document.querySelector(".input2").value;
                        item[2] = document.querySelector(".input3").value;

                        if(editIndex == -1)
                          {
                               array.push(item);
                          }
                            else
                          {
                           array[editIndex] = item;
                           editIndex = -1;
                          }

                           localStorage.setItem(chaveStorage, JSON.stringify(array));
                        
                           atualizarTabela();
                       
            }


          let carregarTabela = (txtTabela1,txtTabela2,txtTabela3) =>
{
    let tabela = document.querySelector(".tabela");

    tabela.innerHTML = `
        <tr>
            <th>${txtTabela1}</th>
            <th>${txtTabela2}</th>
            <th>${txtTabela3}</th>
            <th>Ações</th>
        </tr>
    `;

    for(let i = 0; i < array.length; i++)
    {
        let linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${array[i][0]}</td>
            <td>${array[i][1]}</td>
            <td>${array[i][2]}</td>
            <td>
                <button type="button" class="btn_tabela1" onclick="editarItem(${i})">Editar</button>
                <button type="button" class="btn_tabela2" onclick="excluirItem(${i})">Excluir</button>
            </td>
        `;

        tabela.appendChild(linha);
    }
}


let excluirItem = (i) =>
{
    array.splice(i, 1);

    localStorage.setItem(chaveStorage, JSON.stringify(array));

     atualizarTabela();
                        
}


let editIndex = -1;

let editarItem = (i) =>
{
    document.querySelector(".input1").value = array[i][0];
    document.querySelector(".input2").value = array[i][1];
    document.querySelector(".input3").value = array[i][2];

    editIndex = i;
}


let carregarDados = () =>
{
    array = JSON.parse(localStorage.getItem(chaveStorage)) || [];
}


let buscarItem = () =>
{
    let texto = document.querySelector(".input4").value.toLowerCase();

    let linhas = document.querySelectorAll(".tabela tr");

    for(let i = 1; i < linhas.length; i++) // pula o cabeçalho
    {
        let nome = linhas[i].querySelector("td").textContent.toLowerCase();

        if(nome.includes(texto))
            linhas[i].style.display = "";
        else
            linhas[i].style.display = "none";
    }
}

