import './render.css'

export function render() {
    // bg-[url(something)]
    const el = document.createElement('div')
    el.classList.add('text')
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = 'hello, world'
}