function solucao(tempo, distancia) {
let valor

if (tempo < 5) {
  valor = 600
} else if (5 <= tempo && tempo <= 60) {
  valor = 100*tempo + 50*distancia ;
} else if (tempo > 60 && distancia < 100) {
  valor = 200*distancia ;
} else if (tempo > 60 && distancia >= 100) {
  valor = 150*distancia ;
}
console.log(valor);
}