function solucao(obj) {
    if (obj.temIngresso === false) {
    console.log("ACESSO NEGADO");
  } else {
    if (obj.idade < obj.censura && obj.estaComPais === false) {
      console.log("ACESSO NEGADO");
    } else if (obj.idade < obj.censura && obj.estaComPais === true) {
        console.log("MEIA");
    } else if (obj.idade >= obj.censura) {
      if (obj.idade<18) {
        console.log("MEIA")
      } else if (obj.idade >= 18) {
        if (obj.temCarteirinha === true) {
        console.log("MEIA");
      } else {
        console.log("INTEIRA")
      }
      }
    }

  }
}