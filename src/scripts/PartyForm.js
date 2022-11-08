import { sendRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const parentName = document.querySelector("input[name='parentName']").value
        const childName = document.querySelector("input[name='childName']").value
        const attendees = document.querySelector("input[name='attendees']").value
        const userAddress = document.querySelector("input[name='partyAddress']").value
        const userDate = document.querySelector("input[name='partyDate']").value
        const hours = document.querySelector("input[name='lengthHours']").value


        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: parentName,
            childName: childName,
            attendees: attendees,
            address: userAddress,
            date: userDate,
            lengthHours: hours,
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})

export const PartyForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent's Name</label><br>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label><br>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="attendees">Number of party attendees</label><br>
            <input type="number" name="attendees" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Address of Party</label><br>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyDate">Date needed</label><br>
            <input type="date" name="partyDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="lengthHours">Length of Party (in hours)</label><br>
            <input type="number" name="lengthHours" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}
