<link rel="ContactMe" href="ContactMe.html">Form</link>

const contactform = document.querySelector("#contactform");

async function sendData() {
    
const contactformData = new FormData(contactform);

try {
    const reponse = await fetch("https://emileirussell.github.io/emilei-r/ContactMe.html/post", {
        method: "POST",

        body: contactformData,
    });
    console.log(await response.json());
} catch (e) {
    console.error(e);
}
 }

 contactform.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
 });
