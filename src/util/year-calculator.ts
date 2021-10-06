//En este ejercicio calcularemos la edad en función del año de nacimiento que ingresemos.

import { input } from './input'

export let year_calculator = async () => {

    let status: string = "S"
    while (status == "S" || status == "s") {

        //Creamos la fecha actual
        let actualDate = new Date()

        //Obtenemos el año de nacimiento
        let age = await input("\nEnter your born day (MUST BE IN ENGLISH)")
        let ageDate = new Date(age)

        //Calculo
        var result = actualDate.valueOf() - ageDate.valueOf()
        let ageResult = result / 31557600000 //milisegundos en un año
        console.log(Math.trunc(ageResult)) //truncamos el resultado final

        status = await input("\nDo you want to continue? (S/N)")
        status = status.toLowerCase()
    }

    if (status != "n") {
        console.log("Error!\nClosing the app...")
    }
}