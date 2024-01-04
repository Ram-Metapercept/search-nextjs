const empIdValidation = (e) => {
  let value = e.target.value;
  const errorMessage = document.getElementById("errorEmpId");
  errorMessage.style.display = "block";
  if (value < 1) {
    errorMessage.innerHTML = "Please enter a valid ID";
  } else {
    errorMessage.style.display = "none";
  }
};

const firstNameValidation = (e) => {
  let value = e.target.value;
  const errorMessage = document.getElementById("errorFIRSTNAME");
  const Name = "(^[A-Z]{1,1})+([a-z ]{1,19})$";

  errorMessage.style.display = "block";
  if (value.length < 1) {
    errorMessage.innerHTML = "Name is required";
    errorMessage.style.display = "none";
  } else if (value.charAt(0) != value.charAt(0).toUpperCase()) {
    errorMessage.innerHTML = "First letter must be capital";
  } else if (!value.match(Name)) {
    errorMessage.innerHTML = "Please type correct name";
  } else {
    errorMessage.style.display = "none";
  }
};

const lastNameValidation = (e) => {
  let value = e.target.value;
  const errorMessage = document.getElementById("errorLASTNAME");
  const Name = "(^[A-Z]{1,1})+([a-z ]{1,19})$";

  errorMessage.style.display = "block";
  if (value.length < 1) {
    errorMessage.innerHTML = "Name is required";
    errorMessage.style.display = "none";
  } else if (value.charAt(0) != value.charAt(0).toUpperCase()) {
    errorMessage.innerHTML = "First letter must be capital";
  } else if (!value.match(Name)) {
    errorMessage.innerHTML = "Please type correct name";
  } else {
    errorMessage.style.display = "none";
  }
};

const emailValidation = (e) => {
  let value = e.target.value;
  const errorMessage = document.getElementById("errorEMAIL");
  const emailRegex = "^[A-Za-z0-9_.]{3,}@[A-za-z0-9]{3,}[.]{1}[A-Za-z.]{2,6}$";

  errorMessage.style.display = "block";
  if (value < 1) {
    errorMessage.innerHTML = "Please provide a email id";
    errorMessage.style.display = "none";
  } else if (!value.match(emailRegex)) {
    errorMessage.innerHTML = "Please provide a valid email id";
  } else {
    errorMessage.style.display = "none";
  }
};

const SubscribeEmailValidation = (e) => {
  let value = e.target.value;
  const errorMessage = document.getElementById("errorSubscribeEmail");
  const emailRegex = "^[A-Za-z0-9_.]{3,}@[A-za-z0-9]{3,}[.]{1}[A-Za-z.]{2,6}$";

  errorMessage.style.display = "block";
  if (value < 1) {
    errorMessage.innerHTML = "Please provide a email id";
    errorMessage.style.display = "none";
  } else if (!value.match(emailRegex)) {
    errorMessage.innerHTML = "Please provide a valid email id";
  } else {
    errorMessage.style.display = "none";
  }
};

const addressValidation = (e) => {
  let value = e.target.value;
  const errorMessage = document.getElementById("errorAddress");
  errorMessage.style.display = "block";
  if (value < 1) {
    errorMessage.innerHTML = "Address is required";
  } else {
    errorMessage.style.display = "none";
  }
};

const phoneValidation = (e) => {
  let value = e.target.value;
  const errorMessage = document.getElementById("errorMOBILE");
  const mobileRegex = "(^[6-9]{1,1})+([0-9]{9,9})$";

  errorMessage.style.display = "block";
  if (value < 1) {
    errorMessage.innerHTML = "Phone number is required";
    errorMessage.style.display = "none";
  }
  if (!value.match(mobileRegex)) {
    errorMessage.innerHTML = "Please enter a valid phone number";
  } else {
    errorMessage.style.display = "none";
  }
};

const designationValidation = (e) => {
  let value = e.target.value;
  const errorMessage = document.getElementById("errorDesignation");
  const designationRegex = "(^[A-Za-z ]{1,30})$";

  errorMessage.style.display = "block";
  if (value < 1) {
    errorMessage.innerHTML = "Designation is required";
  } else if (!value.match(designationRegex)) {
    errorMessage.innerHTML = "Enter valid designation";
  } else {
    errorMessage.style.display = "none";
  }
};

const departmentValidation = (e) => {
  let value = e.target.value;
  const errorMessage = document.getElementById("errorDepartment");
  const departmentRegex = "(^[A-Za-z ]{1,30})$";

  errorMessage.style.display = "block";
  if (value < 1) {
    errorMessage.innerHTML = "Department is required";
  } else if (!value.match(departmentRegex)) {
    errorMessage.innerHTML = "Enter valid department name";
  } else {
    errorMessage.style.display = "none";
  }
};

const documentValidation = (e) => {
  let files = e.target.files;
  const errorMessage = document.getElementById("errorDocument");
  const extension = ["doc", "docx", "pdf"];
  let result = 0;

  errorMessage.style.display = "block";
  if (files.length < 1) {
    errorMessage.innerHTML = "Documents are required";
  } else {
    for (let file of files) {
      if (extension.includes(file.name.split(".").pop())) {
        result++;
      }
    }

    if (result == files.length) {
      errorMessage.style.display = "none";
    } else {
      errorMessage.innerHTML = "only pdf and doc file supported";
    }
  }
};

const profileValidation = (e) => {
  const file = e.target.files[0];
  const errorMessage = document.getElementById("errorProfile");
  errorMessage.style.display = "block";

  if (!file) {
    errorMessage.innerHTML = "Profile photo is required";
  } else if (file.type.includes("image/")) {
    errorMessage.style.display = "none";
  } else {
    errorMessage.innerHTML = "Only image file are supported";
  }
};

const isFormValid = () => {
  console.log("in valid form");
  const ErrorMsg = document.getElementsByClassName("errorMessage");
  let count = 0;
  for (let ele of ErrorMsg) {
    if (ele.style.display == "block") count++;
  }

  return count ? false : true;
};

const clearError = (e) => {
  // console.log(e)
  const removeError = document.getElementById(e);
  removeError.style.display = "none";
};

module.exports = {
  empIdValidation,
  firstNameValidation,
  lastNameValidation,
  emailValidation,
  addressValidation,
  phoneValidation,
  designationValidation,
  departmentValidation,
  documentValidation,
  isFormValid,
  profileValidation,
  clearError,
  SubscribeEmailValidation,
};
