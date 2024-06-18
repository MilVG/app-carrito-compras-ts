// Definicion de tipos de variables
 function definicionVaribales(){
    //Definición con el tipo let
    let element: string = "element"
    //Definicion con el tipo var
    var elment2: string = "element2"
    //Definicion con el tipo const
    const element3: string = "element3"
 }

 //Deefinicon de varibales tipados en typescript
function  VaribalesTipados(){

    //defininicion de tipado string
    let name: string = "Delfis"
    //definicion de tipado number
    let edad: number = 20
    //definicion de tipado boolean
    let booleano: boolean = true
    //definicion de tipado array de string
    let skillLangues: Array<string> = ["javascript", "typescript", "python","java","c++","c#"]
    //Defincion de tipado array de numeros
    let workyears:Array<number> = [2019,2020,2021]
    //segundo opcion de sintaxis de array de numeros
    let workyears2: number[] = [2022,2023,2024]
    //definicion de tipado de tupla
    let curses: [string,number,boolean] =[
        "javascript",
        2022,
        true
    ]

    //definicion de tipado de objectos

    //[1]->DEFINICION DE OBJECTOS CON ATRIBUTOS

    /*PODEMOS CREAR UN OBJETO CON LAS INTERFACES*/ 
    interface Person{
        name:string,
        age:number,
        altura:number,
       peso:number,
        sex:boolean
    }
    /*TAMBIEN PODEMOS UTILIZAR  PARA CREAR UN OBJECTO LA DIRECTIVA DE TYPE */

    type python = {
        tipe_languaje:string,
        version:number,
        autor:string
    }

    /* TAMBIEN PODEMOS CREAR UN OBJETO CON LA DIRECTIVA DE Object PERO NO SE RECOMIENDA PORQUE NO SE DEFINEN LOS TIPOS QUE CONTENDRÀ ESTE OBJETO */

    const Perro:Object ={
        'name':'firulais',
        'raza':'labrador'
    }

    //[2]->DEFINICION DE OBJECTOS COMO DICCIONARIO TIPADO]

    /* PODEMOS CREAR CON EL KEY QUE SEA STRING*/ 
    interface Lenguajes{
        [key:string]: number
    }

    let  leng:Lenguajes ={
        'python':1,
        'javascript':2,
        'typescript':3
    }

    /* PODEMOS CREAR CON EL KEY QUE SEA NUMERO*/

    interface Colores{
        [key:number]:string
    }
    
    let  colores:Colores ={
        1:'rojo',
        2:'verde',
        3:'azul'
    }

    /* PODEMOS CREAR TAMBIEN QUE EL VALOR SEA MIXTO */

    interface  Persona{
        [key:string]:string|number|boolean|Array<string>|Array<number>
    }

    let myPersona:Persona ={
        'name':'Delfis',
        'age':20,
        'sex':true,
        'skill':['javascript','typescript','python','java','c++','c#'],
        'workyears':[2019,2020,2021]
    }

    //[NOTA:] TAMBIEN TODO ESTO SE PUEDE DECLARAR CON LA DIRECTIVA DE (TYPE)

    type  Persona2= {
        [key:string]:string|number|boolean|Array<string>|Array<number>
    }


    //DECLARACION DE TIPOS EN FUNCIONES

    /*CUNADO SE CREA UNA FUNCION SE ESPECIFICA LOS PARAMETROS CON TIPO DE DATOS, ADEMÀS EL TIPO DE FUNCION QUE RETORNA, COMO EN ESTE CASO RETORNA UN TIPO NUMBER */
    function suma(num1:number,num2:number):number{
        return num1+num2
    }

    /*EN ESTE SEGUNDO EJEMPLO RETORNAREMOS UNA FUNCION DEL TIPO STRING */

    function concat(str1:string,str2:string):string{
        return str1+str2
    }

    /* EN ESTE TERCER EJEMPLO RETORNAREMOS UNA FUNCION DEL TIPO VOID, QUE SIGNIFICA QUE NO RETORNA NADA*/

    function saludo(saludo:string,mensaje:string):void{
       
       for(let i=0;i<5;i++){
            mensaje += saludo
       } 

       console.log(mensaje);
       
    }

    /*AHORA VEREMOS LA DECLARACION DE UNA FUNCION CON PARAMETROS  DEL TIPO SIN VALOR (?)*/

    function calcMoneyPerson(name:string,sexo?:boolean):void{

    }


    //DEFINICION DE VARIBALES VACIAS,NULLAS,INDEFINIDO,NEVER

    let namevariable:any = "hola"
    let namevariable2:null = null
    let namevariable3:undefined = undefined

    //EN ESTE CASO NEVER ES EL TIPO DE RETORNO QUE NUNCA REGRESAN VALORES
    function error(message:string):never{
        throw new Error(message)
    }


    



}

export default[
    definicionVaribales,
    VaribalesTipados

]