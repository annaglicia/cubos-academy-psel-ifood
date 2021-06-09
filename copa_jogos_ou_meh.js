function solucao(ano) {
    
let r = ano%4

if (r === 2) {
  console.log("COPA");
} else if (r === 0) {
  console.log("JOGOS");
} else {
  console.log("MEH");
}
}
