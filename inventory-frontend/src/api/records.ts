import { recordActions } from "../redux/recordSlice";
import store from "../redux/store";

const url = "http://127.0.0.1:3000";

// Get records in the database and save the result in Redux state
export function getRecords() {
    const recordUrl = `${url}/records`;

    fetch(recordUrl).then((response) => {
        if (response.status === 200) {
            response.json().then((data) => {
                store.dispatch(recordActions.setRecords(data));
            });
        } else {
            // Error
        }
    });
}

// Post given record to the database
export async function postRecord(
    name: string,
    employee: string,
    quantity: number
) {
    const recordUrl = `${url}/records`;

    const recordBody = {
        name: name,
        employee: employee,
        quantity: quantity,
    };

    await fetch(recordUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(recordBody),
    }).then((response) => {
        if (response.status === 201) {
            // Success
        } else {
            // Error
        }
    });
}
