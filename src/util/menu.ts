import { input } from './input'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Multiple of 3 or 5')
    console.log('2.- Age calculator')
    console.log('3.- DNI')
    console.log('0.- Salir')
    n = parseInt( await input('Option') )
    return n
}