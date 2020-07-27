const calc = (price = 10000) => {
    const panelBlock = document.querySelector('.panel-group'),
        switchFirst = document.getElementById('myonoffswitch'),
        switchSecond = document.getElementById('myonoffswitch-two'),
        diameterFirst = document.getElementById('diameter-first'),
        twineFirst = document.getElementById('twine-first'),
        diameterSecond = document.getElementById('diameter-second'),
        twineSecond = document.getElementById('twine-second'),
        calcResult = document.getElementById('calc-result');

    calcResult.value = price + 1000;

    const countSum = () => {
        
        const valueDiameterFirst = diameterFirst.value,
            valueDiameterSecond = diameterSecond.value,
            valueTwineFirst = twineFirst.value,
            valueTwineSecond = twineSecond.value;

        let calcSwitchFirst = 0,
            calcDiameterFirst = 0,
            calcTwineFirst = 0,
            calcSwitchSecond = 0;
        
        (switchFirst.checked) ? calcSwitchFirst = price : calcSwitchFirst = price + 5000;

        (valueDiameterFirst === '1.4 метра') ? calcDiameterFirst = 0 : calcDiameterFirst = price * 0.2;

        (valueTwineFirst === '1 штука') ? calcTwineFirst = 0 :
        (valueTwineFirst === '2 штуки') ? calcTwineFirst = price * 0.3 :
                                        calcTwineFirst = price * 0.5;

        (switchSecond.checked) ? calcSwitchSecond = 1000 : calcSwitchSecond = 0;

        calcResult.value = calcSwitchFirst + calcDiameterFirst + calcTwineFirst + calcSwitchSecond;
    };
    
    panelBlock.addEventListener('change', (event) => {
        const target = event.target;

        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    });
};

export default calc;