import { html, render } from 'lit-html/lib/lit-extended';

let state = {
  name: 'tornike',
}

const handleKeyPress = e => {
  state.name = e.target.value
  render(myHTML(), document.body)
}

const input = html`
  <input
    type=text
    on-keyup=${handleKeyPress}
  />
`

const myHTML = () => html`
  <h2>Hello, ${state.name}!</h2>
  ${input}
`

render(myHTML(), document.body)