const accordeon = () => {

    const panelHead = document.querySelectorAll('.panel-heading'),
        collapse = document.querySelectorAll('.collapse');

    panelHead.forEach((item, i) => {

        item.addEventListener('click', (event) => {
            event.preventDefault();

            collapse[i].classList.toggle('in');

        });
    });
};

export default accordeon;