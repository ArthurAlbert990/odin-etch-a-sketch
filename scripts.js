console.log('js working')

//Lógica para dimensionar a caixa do grid:
//Como instruído, o grid deve ser quadrado iniciando em 16x16
//cada box width e height devem ter o mesmo valor, utilizar o css para realizar o grid
// no css, repeat(16, 1fr) irá gerar 1 grid com 16 colunas, cada seção ocupa 1 fração.
//o container width e height são os mesmos, a referência é o menor, desktop = height

//================================= LOG / ANOTAÇÕES ===============
//[ A FAZER ] FUNÇÃO PARA IDENTIFICAR COR DO COLOR PICKER
// [ A FAZER ] FUNÇÃO "RAINBOW", COR RANDÔMICA A CADA BOX!


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


//FUNÇÃO PARA DESENHAR:;
//rainbow gera uma cor randômica
function draw(e){
    e.target.classList.add('active')
    e.target.style.setProperty('background-color','var(--paintColor)')

    let rainbowCheck = document.querySelector('.rainbow-check')
    if (rainbowCheck.checked){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.setProperty('background-color',`#${randomColor}`)
    }
    
    return  ;
}

function promptGridConfig(){
    return populateGrid(Number(prompt('Set grid size (X by X): ')))
}

//FUNÇÃO COLOR PICKER:
//obtém root
const root = document.querySelector(':root');

function updatePaintColor(e){
    //Atualiza a variável --paintColor em root
    //Desta maneira, a cor já desenhada também se altera
    //caso queira manter as cores já desenhadas
    //alterar o atributo do css, não a variável.
    return root.style.setProperty('--paintColor',e.target.value);
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

//COLOR PICKER
let colorPicker = document.querySelector('.paint-color');
colorPicker.addEventListener('input',updatePaintColor);

//starts with a 8x8 grid
populateGrid(8)