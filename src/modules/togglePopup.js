const togglePopup = () => {
    const popup = document.querySelectorAll('.popup'),
        popupCall = document.querySelector('.popup-call'),
        popupDiscount = document.querySelector('.popup-discount'),
        popupCheck = document.querySelector('.popup-check'),
        popupConsultation = document.querySelector('.popup-consultation'),
        body = document.querySelector('body');
    
    body.addEventListener('click', (event) => {
        let target = event.target;

        if (target.matches('.call-btn')) {
            popupCall.style.display = "block";
        } else if (target.matches('.discount-btn')) {
            popupDiscount.style.display = 'block';
        } else if (target.matches('.check-btn')) {
            popupCheck.style.display = 'block';
        } else if (target.matches('.consultation-btn')) {
            event.preventDefault();
            popupConsultation.style.display = 'block';
        }
    });
    
    popup.forEach((item) => {
        item.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                item.style.display = "none";
            } else {
                target = target.matches('.popup-content');
        
                if (!target) {
                    item.style.display = "none";
                }
            }
        }); 
    });
};

export default togglePopup;