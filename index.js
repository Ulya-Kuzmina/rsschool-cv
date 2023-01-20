var cityChoice = document.querySelector('.contact_choice div');
var cityOptions = document.querySelector('.contact_choice ul');
var cityChoiceArrow = document.querySelector('.contact_choice_arrow');

cityChoice.onclick = () => {
    if (cityChoice.classList.contains('menu')) {
        cityOptions.style.display = "none";
    } else {
        cityOptions.style.display = "block";
    }
    cityChoice.classList.toggle('menu')
    cityChoiceArrow.classList.toggle('contact_choice_arrow_active')
}
