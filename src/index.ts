import { menu } from './util/menu'
import { multiple_numbers } from './util/multiples-number'
import { year_calculator } from './util/year-calculator'
import { dni_maker } from './util/dni'

const main = async () => {
    let n: number
    do {
        n = await menu()
        switch(n) {
            case 1:
                await multiple_numbers()
                break
            case 2:
                await year_calculator()
                break
            case 3:
                await dni_maker()
                break
            case 0:
                console.log("\nExit...")
                break
        } 
    } while ( n != 0)
}

main()