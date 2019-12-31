const message = "Some message from myModule.js";

const name = "Tim";

const location = "Ionia";

const getGreeting = (name) => {
    return `Welcome to the course ${name}`
}

export {
    message, name, getGreeting, location as default
};