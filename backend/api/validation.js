module.exports = app =>{
    function existsOrError(value, msg){
        if(!value) throw msg
        if(Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string' && !value.trim()) throw msg
    
    }
    
    function notExistsOrError(value, msg){
        try{
            existsOrError(value, msg)
        }catch(msg){
            return
        }
        throw msg
    }
    
    function equalsOrerror(valueA, valueB, msg){
        if(valueA !== valueB) throw msg
    }
    //Funcão validar senha
    function senhaValida(p){
        var retorno = false;
        var letrasMaiusculas = /[A-Z]/;
        var letrasMinusculas = /[a-z]/; 
        var numeros = /[0-9]/;
        var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
        if(p.length > 8){
        return retorno;
        }
        if(p.length < 8){
        return retorno;
        }
        var auxMaiuscula = 0;
        var auxMinuscula = 0;
        var auxNumero = 0;
        var auxEspecial = 0;
        for(var i=0; i<p.length; i++){
        if(letrasMaiusculas.test(p[i]))
        auxMaiuscula++;
        else if(letrasMinusculas.test(p[i]))
        auxMinuscula++;
        else if(numeros.test(p[i]))
        auxNumero++;
        else if(caracteresEspeciais.test(p[i]))
        auxEspecial++;
        }
        if (auxMaiuscula > 0){
        if (auxMinuscula > 0){
        if (auxNumero > 0){
        if (auxEspecial) {
        retorno = true;
        }
        }
        }}
        return retorno;
    }
    function TestaCPF(strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
      if (strCPF == "00000000000") return false;
    
      for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
    
      Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
        
    }
    
    
    return{existsOrError,notExistsOrError,equalsOrerror,senhaValida, TestaCPF}
}
    