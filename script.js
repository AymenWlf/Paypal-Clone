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



/* End Of Front Page */