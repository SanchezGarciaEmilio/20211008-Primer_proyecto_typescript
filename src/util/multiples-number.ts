//Comprueba si un numero que introducimos por pantalla es multiplo de 3, de 5 o de ambos.
//El programa puede continuar hasta cuando deseemos.

//Declaracion de variables
import { input } from './input'

//Declaracion de la funcion

export let multiple_numbers = async () => {

        let status: string = "S"
        while (status == "S" || status == "s") {

            //Operacion
            console.log("\nCheck if is multiple by 3 or 5")
            let number = await input("Enter a number")
            let num: number = parseInt(number)

            if (num % 3 == 0 && num % 5 == 0) {
                console.log("Is multiple by 3 or 5")
            } else if (num % 3 == 0) {
                console.log("Is multiple by 3")
            } else if (num % 5 == 0) {
                console.log("Is multiple by 5")
            } else {
                console.log("Is not multiple by 3 or 5")
            }

            status = await input("\nDo you want to continue? (S/N)")
            status = status.toLowerCase()
        }

        if (status != "n") {
            console.log("Error!\nClosing the app...")
        }
    }