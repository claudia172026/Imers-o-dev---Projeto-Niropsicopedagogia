console.log(dados);

// inicio do código para perguntas

document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.subtitle');
    
    titles.forEach(title => {
        title.addEventListener('click', function() {
            const content = this.nextElementSibling;

            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});

// fim do codigo para as perguntas