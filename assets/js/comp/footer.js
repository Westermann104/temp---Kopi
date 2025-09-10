

const footerHTML = `
    <div class="footer-content">

        <label for="fname"></label>
        <input type="text" id="fname" name="firstname" placeholder="NAVN..">

        <label for="Gmail"></label>
        <input type="email" id="gmail" name="gmail" placeholder="E-MAIL.." />

        <label for="Besked"></label>
        <textarea id="Besked" name="Besked" placeholder="SKRIV BESKED.."></textarea>

        <button class="submit">SEND BESKED</button>
        </div>
`;

export const footer = () => {   

    const footerContainer = document.querySelector('.footer')

    if(footerContainer) { 
        footerContainer.insertAdjacentHTML('beforeend', footerHTML) 
    }

}

