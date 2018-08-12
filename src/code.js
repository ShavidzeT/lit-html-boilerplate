import { html, render } from 'lit-html/lib/lit-extended'

let state = {
  name: null,
  enableLiveRendering: false
}

const handleKeyPress = e => {
  if (e.keyCode === 13) {
    renderApp()
  }
}

const handleKeyUp = e => {
  state.name = e.target.value
  if (state.enableLiveRendering) {
    renderApp()
  }
}

const handleButtonClick = () => {
  renderApp()
}

const handleCheckboxClick = e => {
  state.enableLiveRendering = e.target.checked
}

const input = html`
  <input
    type=text
    placeholder="enter your name"
    on-keypress=${handleKeyPress}
    on-keyup=${handleKeyUp}
  />
  <button on-click=${handleButtonClick}>Submit</button>
  <div>
    <label>
      <input
        type=checkbox
        on-click=${handleCheckboxClick}
      /> enable rendering on-keyup event
    </label>
  </div>
`

const myHTML = () => html`
  <h2>Hello, ${state.name ? state.name : 'guest'}!</h2>
  ${input}
`

const renderApp = () => render(myHTML(), document.body)

renderApp()
