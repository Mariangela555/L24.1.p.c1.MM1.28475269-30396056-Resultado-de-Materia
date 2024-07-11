/*RESULTADOS MATERIA
Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
aprueban con 48Ptos.
Se desea procesar a varios estudiantes y determinar la siguiente estadística: cantidad de
aprobados, cantidad de reprobados y nota promedio de la sección.
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos),
777 (50Ptos), 999 (40Ptos), 333 (80Ptos), 111 (30Ptos), 333 (90Ptos), 444 (48Ptos) y
222 (60Ptos),*/
import { Cl_Estudiante } from "./estudiante.js";
import Cl_Materia from "./materia.js";

let estudiante1=new Cl_Estudiante(888,60)
let estudiante2=new Cl_Estudiante(777,50)
let estudiante3=new Cl_Estudiante(999,40)
let estudiante4=new Cl_Estudiante(333,80)
let estudiante5=new Cl_Estudiante(111,30)
let estudiante6=new Cl_Estudiante(333,90)
let estudiante7=new Cl_Estudiante(444,48)
let estudiante8=new Cl_Estudiante(222,60)


let materia=new Cl_Materia()
materia.procesarEstudiante(estudiante1)
materia.procesarEstudiante(estudiante2)
materia.procesarEstudiante(estudiante3)
materia.procesarEstudiante(estudiante4)
materia.procesarEstudiante(estudiante5)
materia.procesarEstudiante(estudiante6)
materia.procesarEstudiante(estudiante7)
materia.procesarEstudiante(estudiante8)
let salida = document.getElementById("salida");
salida.innerHTML= "Resultado"
salida.innerHTML+="<br> Cantitdad de Aprobados:"+ materia.CantAprobados()
salida.innerHTML+="<br> Cantitdad de Reprobados:"+ materia.CantReprobados()
salida.innerHTML+="<br> Promeido de la nota:"+ materia.PromedioNota()
