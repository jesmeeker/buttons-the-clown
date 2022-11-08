import { ButtonsHTML } from "./ButtonsClown.js"
import { fetchRequests , fetchClowns } from "./dataAccess.js"



const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
        .then(() => fetchClowns())
        // .then(() => fetchCompletions())
        .then(
            () => {
                mainContainer.innerHTML = ButtonsHTML()
            }
        )
}

render()

// render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

// Now update your main module again to fetch the completions after requests and plumbers have been fetched.


// const mainContainer = document.querySelector("#container")

// const render = () => {
//     mainContainer.innerHTML = SinkRepair()
// }

// render()

