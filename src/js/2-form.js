const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

let formData = {
    email: "",
    message: "",
};

const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
    formData = JSON.parse(savedData);

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

// Input

form.addEventListener("input", event => {
    const {name, value} = event.target;

    if (!name) return;

    formData[name] = value.trim();

    localStorage.setItem(localStorageKey, JSON.stringify(formData));

});

// Submit

form.addEventListener("submit", event => {
    event.preventDefault();

    const {email, message} = formData;

    if (!email || !message) {
        return alert (`Fill please all fields`);
    }

    console.log(formData);

    localStorage.removeItem(localStorageKey);

    formData.email = "";
    formData.message = "";

    form.reset();
});
