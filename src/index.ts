import '@/test'
import '@/test-demo.css'
import './test.scss'
const str = 'hi'
const foo = (str: string) => {
    console.log(str)
}
foo?.(str)
