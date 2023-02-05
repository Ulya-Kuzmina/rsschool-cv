const cityChoice = document.querySelector('.contact_choice div');
const cityOptionsBlock = document.querySelector('.contact_choice ul');
const cityChoiceArrow = document.querySelector('.contact_choice_arrow');

const cityChoiceBlockLogic = () => {
    if (cityChoice.classList.contains('menu')) {
        cityOptionsBlock.style.display = "none";
    } else {
        cityOptionsBlock.style.display = "block";
    }
    cityChoice.classList.toggle('menu')
    cityChoiceArrow.classList.toggle('contact_choice_arrow_active')
}

cityChoice.onclick = cityChoiceBlockLogic

const cityAdresses = document.querySelectorAll('.contact_choice li');
const city = document.querySelector('.contact_choice span');
const contacts = document.querySelector('.contact_choice_city');
const contactCity = contacts.querySelector('.contact_choice_city_city');
const contactPhone = contacts.querySelector('.contact_choice_city_phone');
const contactAdress = contacts.querySelector('.contact_choice_city_adress');
const contactsMap = {
    'Canandaigua, NY': {
        city: 'Canandaigua, NY', 
        phone: '+1 585 393 0001',
        address: '151 Charlotte Street'
    },
    'New York City': {
        city: 'New York City', 
        phone: '+1	212	456 0002',
        address: '9 East 91st Street'
    },
    'Yonkers, NY': {
        city: 'Yonkers, NY', 
        phone: '+1	914	678 0003',
        address: '511 Warburton Ave'
    },
    'Sherrill, NY': {
        city: 'Sherrill, NY', 
        phone: '+1	315	908 0004',
        address: '14 WEST Noyes BLVD'
    }
};

cityAdresses.forEach(cityAdress => {
    cityAdress.onclick = () => {
        city.innerText = cityAdress.innerText;
        cityChoiceBlockLogic();
        contactCity.innerText = contactsMap[city.innerText].city;
        contactPhone.innerText = contactsMap[city.innerText].phone;
        contactAdress.innerText = contactsMap[city.innerText].address;
        contacts.classList.add('contact_choice_city_visible')
    }
});
