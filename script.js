let inputFields = document.querySelectorAll('input');
let errorIcons = document.querySelectorAll('.error-icon, .second-error-icon, .age-error-icon');
let deductionsInputField = document.querySelector('.deductions');
let fourthErrorIcon = document.querySelector('.fourth-error-icon');

inputFields.forEach((inputField, index) => {
  inputField.addEventListener('input', function () {
    let inputValue = this.value;
    let errorIcon = errorIcons[index];

    if (isNaN(inputValue)) {
      errorIcon.style.display = 'block';
    } else {
      errorIcon.style.display = 'none';
    }
  });
});

deductionsInputField.addEventListener('input', function () {
  let inputValue = this.value;

  fourthErrorIcon.style.display = isNaN(inputValue) ? 'block' : 'none';
});

// error message 1
document.querySelector('.error-icon').addEventListener("mouseenter", () => {
  document.querySelector('.error-message').style.display = "block";
});

document.querySelector('.error-icon').addEventListener("mouseleave", () => {
  document.querySelector('.error-message').style.display = "none";
});

// error message 2
document.querySelector('.second-error-icon').addEventListener("mouseenter", () => {
  document.querySelector('.second-error-message').style.display = "block";
});

document.querySelector('.second-error-icon').addEventListener("mouseleave", () => {
  document.querySelector('.second-error-message').style.display = "none";
});

// error message 3
document.querySelector('.fourth-error-icon').addEventListener("mouseenter", () => {
  document.querySelector('.fourth-error-message').style.display = "block";
});

document.querySelector('.fourth-error-icon').addEventListener("mouseleave", () => {
  document.querySelector('.fourth-error-message').style.display = "none";
});


// modal for the tax calculation

document.addEventListener('DOMContentLoaded', function () {
  let inputFields = document.querySelectorAll('input, select');

  inputFields.forEach((inputField) => {
    inputField.addEventListener('input', function () 
    {
  
      if (this.value.trim() !== "") {
        this.classList.remove('required-field');
      }
    });

  });

  document.querySelector('.submit-btn').addEventListener('click', function (event) {
    event.preventDefault();

    // Get values from the form
    let grossIncome = parseFloat(document.querySelector('.annual-income').value);
    let extraIncome = parseFloat(document.querySelector('.extra-income').value);
    let deductions = parseFloat(document.querySelector('.deductions').value);
    let ageGroup = document.querySelector('.age-group').value;


    let invalidFields = false;
    if (isNaN(grossIncome) || isNaN(extraIncome) || isNaN(deductions) || ageGroup === "") {
      invalidFields = true;
    }

    if (!isValidNumericInput('.annual-income') || !isValidNumericInput('.extra-income') || !isValidNumericInput('.deductions')) {
      invalidFields = true;
    }

    // Highlight empty fields
    highlightEmptyFields();

    if (invalidFields) {
      return; // Exit the function
    }

    // formula
    let overallIncome = grossIncome + extraIncome - deductions;

    let tax = 0;

    if (overallIncome > 800000) {
      // Calculate taxable amount
      let taxableAmount = overallIncome - 800000;

      // Determine tax rate based on age group
      switch (ageGroup) {
        case '<40':
          tax = taxableAmount * 0.3;
          break;
        case '>=40 & <60':
          tax = taxableAmount * 0.4; 
          break;
        case '>=60':
          tax = taxableAmount * 0.1; 
          break;
        default:
          break;
      }

      overallIncome -= tax;
    }

    let modal = document.getElementById('myModal');

    let taxAmountElement = document.getElementById('taxAmount');
    taxAmountElement.textContent = tax.toLocaleString('en-IN');

    let overallIncomeElement = document.getElementById('overallIncome');
    overallIncomeElement.textContent = overallIncome.toLocaleString('en-IN');

    modal.style.display = 'block';

    document.querySelector('.close').addEventListener('click', function () {
      modal.style.display = 'none';
    });

    document.querySelector('.close-btn').addEventListener('click', function () {
      modal.style.display = 'none';
    });

  });

  function highlightEmptyFields() {
    let inputFields = document.querySelectorAll('input, select');
    inputFields.forEach((inputField) => {
      if (inputField.value.trim() === "") {
        inputField.classList.add('required-field');
      } else {
        inputField.classList.remove('required-field');
      }
    });
  }

  function isValidNumericInput(selector) {
    let value = document.querySelector(selector).value.trim();
    return !isNaN(value);
  }
});


// handle the opening and closing of the second modal
document.getElementById('howItWorksBtn').addEventListener('click', function() {
    document.getElementById('howItWorksModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('howItWorksModal').style.display = 'none';
});


let firstDescribe = document.querySelector("#describe-1");
let secondDescribe = document.querySelector("#describe-2");
let thirdDescribe = document.querySelector("#describe-3");
let fourthDescribe = document.querySelector("#describe-4");

let firstDialogBox = document.querySelector(".tooltip-1");
let secondDialogBox = document.querySelector(".tooltip-2");
let thirdDialogBox = document.querySelector(".tooltip-3");
let fourthDialogBox = document.querySelector(".tooltip-4");

// first dialog box
firstDescribe.addEventListener("mouseenter", () => {
  firstDialogBox.style.display = "block";
});

firstDescribe.addEventListener("mouseleave", () => {
  firstDialogBox.style.display = "none";
});

// second dialog box
secondDescribe.addEventListener("mouseenter", () => {
  secondDialogBox.style.display = "block";
});

secondDescribe.addEventListener("mouseleave", () => {
  secondDialogBox.style.display = "none";
});

// third dialog box
thirdDescribe.addEventListener("mouseenter", () => {
  thirdDialogBox.style.display = "block";
});

thirdDescribe.addEventListener("mouseleave", () => {
  thirdDialogBox.style.display = "none";
});

// fourth dialog box
fourthDescribe.addEventListener("mouseenter", () => {
  fourthDialogBox.style.display = "block";
});

fourthDescribe.addEventListener("mouseleave", () => {
  fourthDialogBox.style.display = "none";
});

