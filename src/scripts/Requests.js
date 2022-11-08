import { getRequests, getClowns, saveCompletion } from "./dataAccess.js"
// import { deleteRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
    `
    return html
        }

const convertRequestToListElement = (requestObject) => {
    const clowns = getClowns()
    
    let html = `<li class="requests">
            <div class="request__description">${requestObject.childName}'s Party on ${requestObject.date}</div>
            <button class="request__delete"
                    id="request--${requestObject.id}">
                Deny
            </button>
            <select class="clowns" id="clowns">
            <option value="">Choose</option>
            ${
                clowns.map(
                    clown => {
                        return `<option value="${requestObject.id}--${clown.id}">${clown.name}</option>`
                    }
                ).join("")
            }
        </select>
        </li>`
    return html
}

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")
            
            
            var d = new Date();
            var date= d.getDate()+"-"
                        +d.getMonth()+1+"-"
                        +d.getFullYear()+" "
            
            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
            const completion = {
                requestId: (parseInt(requestId)),
                clownId: (parseInt(clownId)),
                date_created: date
                }

             /*
                 Invoke the function that performs the POST request
                 to the `completions` resource for your API. Send the
                 completion object as a parameter.
              */
             saveCompletion(completion)
        }
    }
)