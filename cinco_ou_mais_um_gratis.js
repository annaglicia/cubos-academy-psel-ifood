function solucao(precos) {
    let valor = 0 ;
let menor = 0 ;
if (precos.length < 5) {
  
  for (let i = 0; i < precos.length; i++) {
    valor = valor + precos[i] ;
  }

} else {
  
  menor = precos[0]
  for (let i = 0; i < precos.length; i++){
    if (precos[i] < menor) {
      menor = precos[i]
    }
  }
  
  for (let i = 0; i < precos.length; i++) {
    valor = valor + precos[i] ;
  }
  valor = valor - menor
}
console.log(valor);
    
}