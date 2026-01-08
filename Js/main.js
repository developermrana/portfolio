const forms = document.querySelectorAll("#contactForm");

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add("was-validated");
    } else {
      event.preventDefault();
      form.classList.add("was-validated");
      alert("Form Submitted Successfully");
      form.reset();
      form.classList.remove("was-validated");
    }
  });
});
