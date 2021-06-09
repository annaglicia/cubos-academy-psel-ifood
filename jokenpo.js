function solucao(joao, andre) {
      if (joao === andre) {
    console.log("EMPATE");
  }

  if (joao === "PEDRA" && andre ==="PAPEL") {
    console.log("ANDRE");
  } else if (joao === "PEDRA" && andre ==="TESOURA") {
    console.log("JOAO");
  }

  if (joao === "TESOURA" && andre ==="PAPEL") {
    console.log("JOAO");
  } else if (joao === "TESOURA" && andre ==="PEDRA") {
    console.log("ANDRE");
  }

  if (joao === "PAPEL" && andre ==="PEDRA") {
    console.log("JOAO");
  } else if (joao === "PAPEL" && andre ==="TESOURA") {
    console.log("ANDRE");
  }
}