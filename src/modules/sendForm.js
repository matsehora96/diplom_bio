const sendForm = () => {
    const errorMessage = 'Ошибка',
        loadMessage = 'Идёт отправка...',
        successMessage = 'Отправлено!';
    
    const mainForm = document.querySelector('.main-form'),
        captureForm = document.querySelector('.capture-form'),
        userName = document.querySelectorAll('[name="user_name"]'),
        userPhone = document.querySelectorAll('[name="user_phone"]');

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
    });

    captureForm.addEventListener('submit', (event) => {
        event.preventDefault();

        captureForm.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(captureForm);

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
        
        captureForm.querySelectorAll('input').forEach(item => {
            item.value = '';
        });

        removeMessage();
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