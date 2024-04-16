# Tax Calculator Web Application
Estimate your taxable income and tax owed with this Tax Calculator Web Application! Input your financial details and let the application do the rest

## Live Application Demo
Check out the live application [here](https://adarshpathak3408.github.io/Tax-Calculator/)

## Pre-Requisites

Before getting started, make sure you have the following installed on your machine:

- A modern Web browser like Google Chrome or Microsoft Edge
- Git (optional, for cloning the repository)

## Getting Started

1. **Clone the Repository:**
  - Open your terminal or command prompt and run the following command to clone the repository to your local machine:

    ```
    git clone https://github.com/adarshpathak3408/Tax-Calculator.git
    ```

2. **Open the Project:**
  - Navigate to the project directory using the `cd` command:

    ```
    cd tax-estimation-web-tool
    ```

3. **Open the Application:** Once inside the project directory, open the `index.html` file in your preferred web browser.

Alternatively, access the live demo [here](https://adarshpathak3408.github.io/Tax-Calculator/).

## Features

- **Input Fields:** Easily input your gross annual income, extra income, age group, and applicable deductions.

- **Error Handling:** The application provides real-time validation for user input, ensuring accurate calculations.

- **Tax Calculation:** Instantly calculate taxable income and tax owed based on the provided inputs.

- **Interactive Tooltips:** Hover over question mark icons for helpful explanations and guidance on each input field.

- **Responsive Design:** Enjoy a seamless experience on desktop and mobile devices.

## Formula Used 

The tax calculation works based on the following formula:
<br>
<br>
  Formula: "Overall Income = Gross Income + Extra Income - Deductions"
  
- If the overall income (after deductions) is under 8 Lakhs, no tax is applied.
- For income over 8 Lakhs:
- 30% tax for individuals under 40 years old
- 40% tax for individuals aged 40 to 59
- 10% tax for individuals aged 60 and above

## How It Works

1. **Input Details:** Enter your gross annual income, extra income, select your age group, and input any applicable deductions.

2. **Validation:** The application validates your input in real-time, ensuring accuracy and completeness.

3. **Calculation:** Based on the provided information and the tax calculation formula, the application determines your taxable income and tax owed.

4. **Results:** View the calculated results on the screen, including taxable income and the amount of tax owed.

5. **Clear and Restart:** Click the "Close" button to clear the results and start over, allowing for multiple calculations as needed.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Interactive Demonstration Screenshots

### Test Cases

1. **Valid Input:**
   - Description: Enter valid values for gross annual income, extra income, age group, and deductions.
   - Screenshot: [![input-field.png](https://i.postimg.cc/MKkySdJm/01.png)](https://postimg.cc/Z0c9PPRW)

2. **Invalid Input - Character Error Tooltip:**
   - Description: Attempt to input characters instead of numbers in the number fields and verify the display of the error tooltip.
   - Screenshot: [![error-display.png](https://i.postimg.cc/J7cMKzxc/011.png)](https://postimg.cc/qgRPv09z)
  
3. **Invalid Input - Age Group Missing:**
   - Description: Submit the form without selecting an age group.
   - Screenshot: [![age-field-missing.png](https://i.postimg.cc/hvGy9sMY/03.png)](https://postimg.cc/bDK9PQ70)

4. **Valid Input - No Deductions:**
   - Description: Enter values for gross annual income and extra income, but no deductions.
   - Screenshot: [![no-deductions-error.png](https://i.postimg.cc/d0q8k15H/012.png)](https://postimg.cc/9Dn4sW5Z)

5. **Valid Input - Age < 40:**
   - Description: Enter values for gross annual income, extra income, and deductions, with an age less than 40.
   - Screenshot: [![less-age.png](https://i.postimg.cc/zXGvghNR/015.png)](https://postimg.cc/8sxT8jj1)

6. **Valid Input - Age ≥ 40 & < 60:**
   - Description: Enter values for gross annual income, extra income, and deductions, with an age between 40 and 60.
   - Screenshot: [![between-age.png](https://i.postimg.cc/R0Bzcrtb/016.png)](https://postimg.cc/bZ3MhB3Q)

7. **Valid Input - Age ≥ 60:**
   - Description: Enter values for gross annual income, extra income, and deductions, with an age greater than or equal to 60.
   - Screenshot: [![greater-age.png](https://i.postimg.cc/SKDtjHf9/017.png)](https://postimg.cc/1gVKjCTR)

8. **Edge Case - No Tax:**
   - Description: Enter values for gross annual income, extra income, and deductions, resulting in a taxable income of 0 (≤ 8 Lakhs).
   - Screenshot: [![no-tax.png](https://i.postimg.cc/QCk6GPCV/image.png)](https://postimg.cc/SYRLcgWp)

9. **How It Works (Feature)**
   - Description: Information about the Calculator after clicking on "How It Works?"
   - Screenshot: [![working-modal-feature.png](https://i.postimg.cc/63xSkCcj/image.png)](https://postimg.cc/mcV8Mz0C)

10. **Information - Tooltip:**
    - Description: Hovering on `?` icon will display the information of that input box
    - Screenshot: [![info-tooltip.png](https://i.postimg.cc/SsK8NvgJ/image.png)](https://postimg.cc/VS35KDQ8)

11. **Blank Fields - Error:**
    - Description: If user clicks on `submit` and all the input fields are empty then it should not get submitted
    - Screenshot: [![blank-field.png](https://i.postimg.cc/8cppL7F5/image.png)](https://postimg.cc/njWfJcGb)

12. **Final Output**
    - Screenshot: [![final-output.png](https://i.postimg.cc/sft2xgmp/image.png)](https://postimg.cc/0r0vHxLQ)

## Contributing

We welcome contributions to the Tax Calculator Project! If you encounter any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## End Note

Thank you for exploring our Tax Calculator Web Application! We hope you find it useful for estimating your taxable income and tax owed. If you encounter any issues, have suggestions for improvements, or would like to contribute to the project, please feel free to reach out to us. Happy calculating! :)
