const sendForm = (dataObj) => {
    const errorMessage = 'Ошибка',
        loadMessage = 'Идёт отправка...',
        successMessage = 'Отправлено!';

    const mainForm = document.querySelector('.main-form'),
        captureForm = document.querySelectorAll('.capture-form'),
        userName = document.querySelectorAll('[name="user_name"]'),
        userPhone = document.querySelectorAll('[name="user_phone"]'),
        userQuest = document.querySelector('[name="user_quest"]'),
        calcResult = document.getElementById('calc-result');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: black;';

    userPhone.forEach((item) =>{
        item.addEventListener('input', () =>{
            item.value = item.value.replace(/\D/g, '');
        });
    });

    userName.forEach((item) =>{
        item.addEventListener('input', () =>{
            item.value = item.value.replace(/([0-9a-zA-Z])/g, '');
        });
    });
    
    mainForm.addEventListener('submit', (event) => {
        event.preventDefault();

        userPhone.forEach((item) => {
            if (item.value.length > 4 && item.value.length < 16) {
                mainForm.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
                const formData = new FormData(mainForm);
    
                let body = {};
    
                formData.forEach((val, key) => {
                    body[key] = val;
                });
    
                postData(body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error('status network not 200');
                        }
                        statusMessage.textContent = successMessage;
                    })
                    .catch((error) => {
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    });
    
                mainForm.querySelectorAll('input').forEach(item => {
                    item.value = '';
                });
    
                removeMessage();
            }
        });
    });

    captureForm.forEach((item) => {
        item.addEventListener('submit', (event) => {
            event.preventDefault();

            userPhone.forEach((elem) => {
                if (elem.value.length > 4 && elem.value.length < 16) {

                    item.appendChild(statusMessage);
                    statusMessage.textContent = loadMessage;
                    const formData = new FormData(item);
    
                    let body = {};

                    formData.forEach((val, key) => {
                        body[key] = val;
                    });
    
                    for (let key in dataObj) {
                        body[key] = dataObj[key];
                    }
    
                    postData(body)
                        .then((response) => {
                            if (response.status !== 200) {
                                throw new Error('status network not 200');
                            }
                            statusMessage.textContent = successMessage;
                        })
                        .catch((error) => {
                            statusMessage.textContent = errorMessage;
                            console.error(error);
                        });
    
                    item.querySelectorAll('input').forEach(item => {
                        item.value = '';
                    });
    
                    removeMessage();
                }
            }) 

        });
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

    const removeMessage = () => {
        setTimeout(() => {
            statusMessage.remove();
        }, 5000);
    };
};

export default sendForm;
