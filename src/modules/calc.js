const calc = (price, data) => {
    const panelBlock = document.querySelector('.panel-group'),
        switchFirst = document.getElementById('myonoffswitch'),
        switchSecond = document.getElementById('myonoffswitch-two'),
        diameterFirst = document.getElementById('diameter-first'),
        twineFirst = document.getElementById('twine-first'),
        diameterSecond = document.getElementById('diameter-second'),
        twineSecond = document.getElementById('twine-second'),
        inputMeter = document.querySelector('.input-meter'),
        calcResult = document.getElementById('calc-result');

    calcResult.value = price + 1000;
    diameterSecond.closest('.select-box').style.display = 'none';
    diameterSecond.closest('.select-box').previousElementSibling.style.display = 'none';
    twineSecond.closest('.select-box').style.display = 'none';
    inputMeter.addEventListener('input', () => {
        inputMeter.value = inputMeter.value.replace(/\D/g, ''); 
    });

    data['Тип септика'] = 'Однокамерный';
    data['Первый колодец'] = '1.4 метра, 1 штука';
    data['Днище'] = 'Есть';
    data['Оплата'] = calcResult.value;

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
            data['Тип септика'] = 'Однокамерный';
        } else {
            diameterSecond.closest('.select-box').style.display = 'inline-block';
            diameterSecond.closest('.select-box').previousElementSibling.style.display = 'inline-block';
            twineSecond.closest('.select-box').style.display = 'inline-block';
            calcSwitchFirst = price + 5000;
            data['Тип септика'] = 'Двухкамерный';
        }

        // Diameter and twine first
        (valueDiameterFirst === '1.4 метра') ? 
            (calcDiameterFirst = 0, data['Первый колодец'] = '1.4 метра' ) : 
            (calcDiameterFirst = calcSwitchFirst * 0.2, data['Первый колодец'] = '2 метра');

        (valueTwineFirst === '1 штука') ? (calcTwineFirst = 0, data['Первый колодец'] += ', 1 штука') :
        (valueTwineFirst === '2 штуки') ? (calcTwineFirst = calcSwitchFirst * 0.3, data['Первый колодец'] += ', 2 штуки') :
                                        (calcTwineFirst = calcSwitchFirst * 0.5, data['Первый колодец'] += ', 3 штуки');

        // Diameter and twine second
        if (valueDiameterSecond === '1.4 метра') {
            calcDiameterSecond = 0;
            if (diameterSecond.closest('.select-box').style.display === 'inline-block') {
                data['второй колодец'] = '1.4 метра';
            } else {
                delete(data['второй колодец']);
            }
        } else {
            calcDiameterSecond = calcSwitchFirst * 0.2
            if (diameterSecond.closest('.select-box').style.display === 'inline-block') {
                data['второй колодец'] = '2 метра';
            } else {
                delete(data['второй колодец']);
            }
        }

        if (valueTwineSecond === '1 штука') {
            calcTwineSecond = 0;
            if (twineSecond.closest('.select-box').style.display === 'inline-block') {
                data['второй колодец'] += ', 1 штука';
            } 
        } else if (valueTwineSecond === '2 штуки') {
            calcTwineSecond = calcSwitchFirst * 0.3;
            if (twineSecond.closest('.select-box').style.display === 'inline-block') {
                data['второй колодец'] += ', 2 штуки';
            }    
        } else {
            calcTwineSecond = calcSwitchFirst * 0.5
            if (twineSecond.closest('.select-box').style.display === 'inline-block') {
                data['второй колодец'] += ', 3 штуки';
            }    
        }

        (!switchFirst.checked && switchSecond.checked) ? (calcSwitchSecond = 2000, data['Днище'] = 'Есть') :
        (switchFirst.checked && switchSecond.checked) ? (calcSwitchSecond = 1000, data['Днище'] = 'Есть') :
                                                    (calcSwitchSecond = 0, data['Днище'] = 'Нету');

        calcResult.value = calcSwitchFirst + calcDiameterFirst + calcDiameterSecond + calcTwineFirst + calcTwineSecond + calcSwitchSecond;

        data['Оплата'] = calcResult.value;

    };

    panelBlock.addEventListener('change', (event) => {
        const target = event.target;

        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    });
};

export default calc;
