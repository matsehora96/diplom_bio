const accordeon = () => {

    const accordionOne = document.getElementById('accordion'),
        accordionTwo = document.getElementById('accordion-two'),
        panelHeadFirst = accordionOne.querySelectorAll('.panel-heading'),
        panelHeadSecond = accordionTwo.querySelectorAll('.panel-heading'),
        collapseFirst = accordionOne.querySelectorAll('.collapse'),
        collapseSecond = accordionTwo.querySelectorAll('.collapse');

    panelHeadFirst.forEach((item, i) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            collapseFirst.forEach((elem) => {
                elem.classList.remove('in');
            });

            if (target.closest('.panel-heading')) {
                collapseFirst[i].classList.add('in');
            }
        });
    });

    panelHeadSecond.forEach((item, i) => {

        item.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            collapseSecond.forEach((item) => {
                item.classList.remove('in');
            });

            if (target.closest('.panel-heading')) {
                collapseSecond[i].classList.add('in');
            }
        });
    });
};

export default accordeon;