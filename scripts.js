console.log('js working')

//Lógica para dimensionar a caixa do grid:
//Como instruído, o grid deve ser quadrado iniciando em 16x16
//cada box width e height devem ter o mesmo valor, utilizar o css para realizar o grid
// no css, repeat(16, 1fr) irá gerar 1 grid com 16 colunas, cada seção ocupa 1 fração.
//o container width e height são os mesmos, a referência é o menor, desktop = height


// ============================================= FUNÇÕES =======================================
//==============================================================================================
//FUNÇÃO TO POPULATE GRID WITH DIVS:
function populateGrid(gridSize){
    if(gridSize>100){
        gridSize = 100;
    }
    if(typeof(gridSize) != 'number'){
        console.log(typeof(gridSize));
        return alert('Only numbers allowed.');
    }

    const gridContainer = document.querySelector(".grid-container");
    //apagar todo o conteúdo de grid:
    gridContainer.replaceChildren('') //substitui todos os filhos do elemento por '' (vazio)

    //atualiza var gridSize do css de acordo com o gridSize da função
    document.documentElement.style.setProperty(`--gridSize`,`${gridSize}`);

    for (let x =0; x< (gridSize * gridSize); x++){
        let div = document.createElement("div");
        div.classList.add('box')
        div.g
        gridContainer.append(div);
    }

    hoverHandler() //adiciona event listener para toda grid

    return ;
}

//FUNÇÃO PARA DESENHAR:
function draw(e){
    return e.target.classList.add('active');
}

function promptGridConfig(){
    return populateGrid(Number(prompt('Set grid size (X by X): ')))
}


//======================================= EVENT LISTENERS ===========================
//===================================================================================
//EVENT LISTENER PARA TODO "BOX":
function hoverHandler(){
    let gridBoxes = document.querySelectorAll(".box");
    return gridBoxes.forEach(box=>box.addEventListener('mouseenter', draw));
}

//SET GRID
let setGridButton = document.querySelector('.btn-grid-size');
setGridButton.addEventListener('click',promptGridConfig);

//starts with a 8x8 grid
populateGrid(8)