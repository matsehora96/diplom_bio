const calc = () => {
    const panelBlock = document.querySelector('.panel-group'),
        calcResult = document.getElementById('calc-result');

    const countSum = () => {
        calcResult.value = 1;
    };
    
    panelBlock.addEventListener('change', (event) => {
        const target = event.target;

        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    });
};

export default calc;