

const accordeon = () => {

    const accordionOne = document.getElementById('accordion'),
        accordionTwo = document.getElementById('accordion-two'),
        panelHeadFirst = accordionOne.querySelectorAll('.panel-heading'),
        panelHeadSecond = accordionTwo.querySelectorAll('.panel-heading'),
        collapseFirst = accordionOne.querySelectorAll('.collapse'),
        btn = accordionOne.querySelectorAll('a.construct-btn'),
        collapseSecond = accordionTwo.querySelectorAll('.collapse');

    panelHeadFirst.forEach((item, i) => {
        item.addEventListener('click', handleItemClick(collapseFirst, i));
    });

    panelHeadSecond.forEach((item, i) => {
        item.addEventListener('click', handleItemClick(collapseSecond, i));
    });

    btn.forEach((item) => {
        item.addEventListener('click' , (event) => {
            event.preventDefault();

            collapseFirst.forEach((elem) => {
                elem.classList.remove('in');
            });

            item.closest('.panel').nextElementSibling.children[1].classList.add('in');
            
        });
    });

    function handleItemClick(collapseBlock, i) {
        return (event) => {
            event.preventDefault();
            let target = event.target;

            collapseBlock.forEach((elem) => {
                elem.classList.remove('in');
            });

            if (target.closest('.panel-heading')) {
                collapseBlock[i].classList.add('in');
            }
        };
    }

};

export default accordeon;