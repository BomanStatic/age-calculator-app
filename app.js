const submitButton = document.querySelector("#submit");
const outputs = document.querySelectorAll("h2 > span");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const inputYear = document.querySelector("#year").value;
    const inputDay = document.querySelector("#day").value;
    const inputMonth = document.querySelector("#month").value;

    const ageArray = calculateAge(`${inputYear}-${inputMonth}-${inputDay}`);
    for (let i = 0; i < outputs.length; i++) {
        outputs[i].textContent = `${ageArray[i]} `;
    }
});

const calculateAge = (birthDateString) => {
    const birthDate = new Date(birthDateString);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    return [years, months, days];
};
