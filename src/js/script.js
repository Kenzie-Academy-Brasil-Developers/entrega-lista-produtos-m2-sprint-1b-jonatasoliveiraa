const tagUl = document.querySelector(".containerListaProdutos ul")
function mostrarProdutos(listaProdutos){

    tagUl.innerHTML = ""
    listaProdutos.forEach((produto) => {

        const tagLi = document.createElement("li")
        const img = document.createElement("img")
        const h3 = document.createElement("h3")
        const paragraph = document.createElement("p")
        const span = document.createElement("span")
        
        img.src = produto.img
        img.alt = produto.nome
        h3.innerText = produto.nome
        paragraph.innerText = `R$ ${produto.preco},00`
        span.innerText = produto.secao
        
        tagLi.append(img,h3,span,paragraph)
        tagUl.append(tagLi)
        
        
    });
    
    sum(listaProdutos)
}


const valorTotal = document.getElementById("precoTotal")

function sum(arrayProduto){ 

    let soma = 0
    for(let i = 0; i < arrayProduto.length; i++){
        soma += arrayProduto[i].preco
    }        
    
    valorTotal.innerText = `R$ ${soma.toFixed(2)}`
    
}



function filtrarTodos(){

    const listarTodos = produtos.filter((produto) =>{
        return produto

    })
    mostrarProdutos(listarTodos)
}
const botaoTodos = document.querySelector(".estiloGeralBotoes--mostrarTodos")
botaoTodos.addEventListener("click",filtrarTodos)



function filtrarHortiFruti(){

    const listaHortiFruti = produtos.filter((produto) =>{
        return produto.secao === "Hortifruti"
    })

    mostrarProdutos(listaHortiFruti)
    
}
const botaoHortiFruti = document.querySelector(".estiloGeralBotoes--filtrarHortifruti")
botaoHortiFruti.addEventListener("click",filtrarHortiFruti)



function filtrarPanificadora(){

    const listaPanificadora = produtos.filter((produto) =>{
        return produto.secao === "Panificadora"

    })
    mostrarProdutos(listaPanificadora)
}
const botaoPanificadora = document.querySelector(".estiloGeralBotoes--filtrarPanificadora")
botaoPanificadora.addEventListener("click", filtrarPanificadora)




function filtrarLaticinios(){

    const listaLaticinios = produtos.filter((produto) =>{
        return produto.secao === "Laticínio"

    })

    mostrarProdutos(listaLaticinios)

}
const botaoLaticinios = document.querySelector(".estiloGeralBotoes--filtrarLaticinios")
botaoLaticinios.addEventListener("click",filtrarLaticinios)




const botaoCampoDeBusca = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome")
const inputCampoDeBusca = document.querySelector(".campoBuscaPorNome")
function filtrarCampoDeBusca(){

    const inputText = inputCampoDeBusca.value.trim()

    const campoDeBusca = produtos.filter((produto) =>{
        if(produto.nome.toLowerCase().includes(inputText.toLowerCase())){
            return true
        }
    })
    mostrarProdutos(campoDeBusca)
}

botaoCampoDeBusca.addEventListener("click", filtrarCampoDeBusca)