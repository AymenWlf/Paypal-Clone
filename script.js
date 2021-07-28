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
const loginBtn = document.querySelector(".login-button");
const Paypal = document.querySelector(".span");

loginBtn.addEventListener('click', () => {
    FrontPage.style.cssText = 'display:none;';
    LogInPage.style.cssText = 'display:block';
})

Paypal.addEventListener('click', () => {
    FrontPage.style.cssText = 'display:block;';
    LogInPage.style.cssText = 'display:none';
})


/* End of Log in Page */