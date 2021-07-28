/* Front Page */

/* Section 1 */

/* Dropdown script */

const dropdownItems = document.querySelectorAll('.dropdown-hover');

dropdownItems.forEach(dropdownItem => {
    dropdownItem.addEventListener('mouseover', () => {
        dropdownItem.lastElementChild.style.cssText = "opacity: 1; visibility: visible;";
        document.querySelector('.nav-bar').style.cssText = "background: linear-gradient(to right, #066399, #2f8fdf, #066299);"
    })

    dropdownItem.addEventListener('mouseout', () => {
        dropdownItem.lastElementChild.style.cssText = "opacity: 0; visibility: hidden;";
        document.querySelector('.nav-bar').style.cssText = "background: none;"
    })

})


/* End of Dropdown script */

/* End Of Section 1 */

/* Section 2 */

/* End Of Section 2 */

/* Section 3 */

/* End Of Section 3 */

/* Section 4 */

/* End Of Section 4 */

/* Section 5 */

/* End Of Section 5 */

/* Section 6 */

/* End Of Section 6 */



/* End Of Front Page */


/* Log in Page */
const FrontPage = document.querySelector(".Front-Page");
const LogInPage = document.querySelector(".LogInPage");
const SignUpPage = document.querySelector(".SignUpPage")
const loginBtn = document.querySelectorAll(".login-button");
const Paypal = document.querySelectorAll(".logo");
const SignUp = document.querySelectorAll(".toSignUp")

loginBtn.forEach(log => {
    log.addEventListener('click', () => {
        FrontPage.style.cssText = 'display:none;';
        LogInPage.style.cssText = 'display:block';
        SignUpPage.style.cssText = 'display:none';
    })
})

Paypal.forEach(logo => {
    logo.addEventListener('click', () => {
        FrontPage.style.cssText = 'display:block;';
        LogInPage.style.cssText = 'display:none';
        SignUpPage.style.cssText = 'display:none';
    })
})


SignUp.forEach(Sign => {
    Sign.addEventListener('click', () => {
        FrontPage.style.cssText = 'display:none;';
        LogInPage.style.cssText = 'display:none';
        SignUpPage.style.cssText = 'display:block';
    })
})


/* End of Log in Page */

/* SignUp Page */


/* End of SignUp Page */