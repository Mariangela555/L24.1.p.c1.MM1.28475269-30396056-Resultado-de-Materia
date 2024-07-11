export default class Cl_Materia{
    constructor(){
        this.contAprobados=0
        this.contReprobados=0
        this.contEstudiantes=0
        this.acumNotaFinal=0
    }
    procesarEstudiante(es){
        if(es.notaFinal <=48){
            this.contReprobados++
            
        }
        else if(es.notaFinal> 48){
            this.contAprobados++
        }
        this.contEstudiantes++
        
        this.acumNotaFinal+= es.notaFinal
    }
    CantAprobados(){
       return this.contAprobados
    }
    CantReprobados(){
        return this.contReprobados
    }
    PromedioNota(){
        this.acumNotaFinal/this.contEstudiantes
    }
}