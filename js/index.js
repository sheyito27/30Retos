function load(challenges) {
    const container = document.querySelector('#challenges');
    
    container.innerHTML = '';

    for (let i = 0; i < challenges.length; i++) {
        // Usar detalles y resumen para crear el efecto desplegable
        const challengeHTML = `
            <div class="challenge">
                <details>
                    <summary>${challenges[i].name}: ${challenges[i].title}</summary>
                    <p>${challenges[i].description}</p>
                </details>
            </div>
        `;
        
        container.innerHTML += challengeHTML; 
    }
}

load(challengeList);
