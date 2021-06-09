function solucao(letra, palavras) {
   let perderam = 0
  for (let i = 0 ; i < palavras.length ; i++) {
    
    if (palavras[i][0] !== letra) {
      perderam++
    }
  
  }
  console.log(perderam);
}