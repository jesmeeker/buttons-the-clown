import { Requests } from "./Requests.js"
import { PartyForm } from "./PartyForm.js"


export const ButtonsHTML = () => {
    return `
        <header><img src="https://i.pinimg.com/originals/e3/40/c8/e340c805c9dfc365a8d30fa583d75afe.jpg" alt="clowns" width="100px">
        <h1>Buttons and Lollipop the Clowns</h1></header>

        <section class="serviceForm">
            ${PartyForm()}
        </section>

        <section class="serviceRequests">
            <h2>Party Requests</h2>
            ${Requests()}
        </section>
    `
}