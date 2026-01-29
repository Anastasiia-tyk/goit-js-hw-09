const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

let formData = {
    email: "",
    message: "",
};


// Input



// Submit

form.addEventListener("submit", event => {
    event.preventDefault();

    const {email, message} = formData;

    if (!email || !message) {
        return alert (`Fill please all fields`);
    }

    console.log(formData);
})
