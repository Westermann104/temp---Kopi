

const footerHTML = `
    <div class="footer-content">

        <h1>Kontakt Os</h1>
        <label for="fname"></label>
        <input type="text" id="fname" name="fname" placeholder="NAVN.." required />

        <label for="gmail"></label>
        <input type="email" id="gmail" name="gmail" placeholder="E-MAIL.." required />

        <label for="besked"></label>
        <textarea id="besked" name="besked" placeholder="SKRIV BESKED.." required></textarea>

        <button class="btnsubmit">SEND BESKED</button>
`;

export const footer = () => {   

    const footerContainer = document.querySelector('.footer')

    if(footerContainer) { 
        footerContainer.insertAdjacentHTML('beforeend', footerHTML) 
    }

}

