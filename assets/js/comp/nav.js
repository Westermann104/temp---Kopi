const headerTmpl = () => {
return `
<section class="topbar">
    <img src="assets/icons/truck-solid.svg" alt="">
<p> Bestiller du nu, vil din ordre blive sendt i dag</p>
</section>
<nav class="header_bar">
<ul>
<li><a href="index.html">Vores  produktgrupper</a></li>
<li><a href="index.html">Vi anbefaler</a></li>
<li><a href="index.html">Kontakt os</a></li>
</ul>
</nav>
        `
}

export const header = () => {

    const headerContainer = document.querySelector('.header')
    if(headerContainer) {
        headerContainer.insertAdjacentHTML('beforeend', headerTmpl())
    }

}