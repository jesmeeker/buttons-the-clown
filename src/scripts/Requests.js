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

    

    let sortedRequests = requests.sort((a, b) => {
        let da = new Date(a.date),
            db = new Date(b.date);
        return da - db;
    });

    let html = `
        <ul>
            ${
                sortedRequests.map(convertRequestToListElement).join("")
            }
        </ul>
    `
    return html
        }

const convertRequestToListElement = (requestObject) => {
    const clowns = getClowns()
    var parts = requestObject.date.split('-');
    // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
    // January - 0, February - 1, etc.
        var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
        console.log(mydate.toDateString());
    
    let html = `<li class="requests">
            <div class="request__description">${requestObject.childName}'s Party on ${mydate.toDateString()}</div>
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