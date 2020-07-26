const clickButton = () => {
    const blockSentence = document.querySelector('.sentence');

    blockSentence.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('add-sentence-btn')) {
            document.querySelector('.add-sentence-btn').style.display = 'none';
            blockSentence.querySelectorAll('.hidden').forEach(elem => {
                elem.classList.remove('hidden');
            });
        }
    });

};

export default clickButton;