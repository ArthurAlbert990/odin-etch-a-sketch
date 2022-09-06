console.log('js working')

//Lógica para dimensionar a caixa do grid:
//Como instruído, o grid deve ser quadrado iniciando em 16x16
//cada box width e height devem ter o mesmo valor, utilizar o css para realizar o grid
// no css, repeat(16, 1fr) irá gerar 1 grid com 16 colunas, cada seção ocupa 1 fração.

//FUNÇÕES TO POPULATE GRID WITH DIVS:

function populateGrid(gridSize){
    const gridContainer = document.querySelector(".grid-container");

    for (let x =1; x<= (gridSize * gridSize); x++){
        let div = document.createElement("div");
        gridContainer.append(div);
    }
    
    return ;
}

//populateGrid()