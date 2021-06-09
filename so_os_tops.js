function solucao(produtos) {
let valorTotal = 0
let totalTop = 0

for (let item of produtos) {
valorTotal = valorTotal + item.preco
}

for (let i = 0; i < produtos.length; i++) {
  if (produtos[i].preco > 10000) {
    totalTop = totalTop + produtos[i].preco
  }
}
let percentual = totalTop/valorTotal

let relatorio = {totalTop, percentual}

console.log(relatorio);
    
}