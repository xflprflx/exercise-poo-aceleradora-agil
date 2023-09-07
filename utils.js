const inicialMaiuscula = (palavra) => {
    return palavra != null ? palavra = palavra.charAt(0).toUpperCase() + palavra.slice(1) : "YEAH YEAH!";
}

export default inicialMaiuscula;