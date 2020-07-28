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
    diameterSecond.closest('.select-box').style.display = 'none';
    diameterSecond.closest('.select-box').previousElementSibling.style.display = 'none';
    twineSecond.closest('.select-box').style.display = 'none';

    const countSum = () => {
        
        const valueDiameterFirst = diameterFirst.value,
            valueDiameterSecond = diameterSecond.value,
            valueTwineFirst = twineFirst.value,
            valueTwineSecond = twineSecond.value;

        let calcSwitchFirst = 0,
            calcDiameterFirst = 0,
            calcDiameterSecond = 0,
            calcTwineFirst = 0,
            calcTwineSecond = 0,
            calcSwitchSecond = 0;
        
        if (switchFirst.checked) {
            diameterSecond.closest('.select-box').style.display = 'none';
            diameterSecond.closest('.select-box').previousElementSibling.style.display = 'none';
            twineSecond.closest('.select-box').style.display = 'none';
            calcSwitchFirst = price;
        } else {
            diameterSecond.closest('.select-box').style.display = 'inline-block';
            diameterSecond.closest('.select-box').previousElementSibling.style.display = 'inline-block';
            twineSecond.closest('.select-box').style.display = 'inline-block';
            calcSwitchFirst = price + 5000;
        }
        
        // Diameter and twine first
        (valueDiameterFirst === '1.4 метра') ? calcDiameterFirst = 0 : calcDiameterFirst = calcSwitchFirst * 0.2;

        (valueTwineFirst === '1 штука') ? calcTwineFirst = 0 :
        (valueTwineFirst === '2 штуки') ? calcTwineFirst = calcSwitchFirst * 0.3 :
                                        calcTwineFirst = calcSwitchFirst * 0.5;

        // Diameter and twine second
        (valueDiameterSecond === '1.4 метра') ? calcDiameterSecond = 0 : calcDiameterSecond = calcSwitchFirst * 0.2;

        (valueTwineSecond === '1 штука') ? calcTwineSecond = 0 :
        (valueTwineSecond === '2 штуки') ? calcTwineSecond = calcSwitchFirst * 0.3 :
                                        calcTwineSecond = calcSwitchFirst * 0.5;

        (!switchFirst.checked && switchSecond.checked) ? calcSwitchSecond = 2000 :
        (switchFirst.checked && switchSecond.checked) ? calcSwitchSecond = 1000 :
                                                    calcSwitchSecond = 0;
                                                        
        calcResult.value = calcSwitchFirst + calcDiameterFirst + calcDiameterSecond + calcTwineFirst + calcTwineSecond + calcSwitchSecond;
    };
    
    panelBlock.addEventListener('change', (event) => {
        const target = event.target;

        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    });
};

export default calc;