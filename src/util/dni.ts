//Con arrays calcularemos si un DNI introducido es correcto

//En este ejercicio calcularemos la edad en función del año de nacimiento que ingresemos.

import { input } from './input'

export let dni_maker = async () => {

    let status: string = "S"
        while (status == "S" || status == "s") {
        console.log("\nDNI calculator")
        var letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        let dniNum = parseInt( await input('Insert your DNI number') )

        if (dniNum >= 10000000 && dniNum <= 99999999) { //Consideramos que al menos el primer numero del DNI debe ser 1.
            let num = dniNum % 23
            console.log("Your DNI is", dniNum.toString(), letters[num])
        } else {
            console.log("Error! Number not valid")
        }
        
        status = await input("\nDo you want to continue? (S/N)")
        status = status.toLowerCase()
    }

    if (status != "n") {
        console.log("Error!\nClosing the app...")
    }
}