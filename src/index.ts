import '@/test'
const str = 'hi'
const foo = (str: string) => {
    console.log(str)
}
foo?.(str)
