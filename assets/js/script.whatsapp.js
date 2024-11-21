if(document.querySelector(".whatsappChat")){
    document.querySelector(".whatsappChat").innerHTML=`
    <div class="whatsapp-btn hvr-buzz-out">
        <i class="fab fa-whatsapp"></i>
        <i class="fas fa-times"></i>
    </div>
    <div class="whatsapp-container">
        <div class="whatsapp-container-header">
            <span>Help Chat</span>
        </div>
        <div class="whatsapp-container-inner">
            <div class="whatsappMessageInfo">Hello, how can we help you?</div>
            <textarea id="whatsappMessage"
                placeholder="Hi there! Use this box to send me a message via WhatsApp..."></textarea>
        </div>
        <div class="whatsapp-container-footer">
            <div>Send via WhatsApp <i class="fa fa-chevron-right"></i></div>
        </div>
    </div>
    `
    document.querySelector(".whatsapp-btn").onclick = function () {
        document.querySelector(".whatsapp-btn").classList.toggle("open")
        document.querySelector(".whatsapp-container").classList.toggle("open")
        if (!document.querySelector(".whatsapp-container").classList.contains("open")) {
            document.querySelector("#whatsappMessage").value = ""
        } else {
            document.querySelector(".whatsapp-container.open #whatsappMessage").focus()
        }
    }
    document.querySelector(".whatsapp-container .whatsapp-container-footer").onclick = function () {
        var message = document.querySelector("#whatsappMessage").value;
        if (message.length == "") {
            alert("Please! Enter Your Message in WhatsApp Chat Box");
        } else {
            window.open("https://web.whatsapp.com/send?phone=923010247722&text=" + message);
        }
    }
    window.addEventListener("scroll", function () {
        document.querySelector(".whatsapp-btn").classList.remove("open");
        document.querySelector(".whatsapp-container").classList.remove("open");
    });
}