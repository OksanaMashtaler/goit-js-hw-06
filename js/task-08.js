const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("All fields must be filled");
  } else {
    const formAproved = {
      email: email.value,
      password: password.value,
    };
    console.log(formAproved);
  }

  event.currentTarget.reset();
}
