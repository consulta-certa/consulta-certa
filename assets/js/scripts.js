// Integração do chat bot na página
window.watsonAssistantChatOptions = {
    integrationID: "aa86954f-4b74-47ca-b5d1-96b96262d81e", // The ID of this integration.
    region: "us-south",
    serviceInstanceID: "d61db492-76f5-4eae-97da-0bd20514cee2", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
};

setTimeout(function () {
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});

// Abrindo faq
document.querySelectorAll(".faq").forEach(faq => {
    faq.addEventListener('click', function () {
        this.classList.toggle("clicked")
    })
})

// Abrindo modal
document.querySelectorAll(".botaoModal, .fechar, .fecharBotao").forEach(botao => {
    botao.addEventListener('click', function () {
        this.querySelector('img').classList.toggle('icon-mais')

        document.querySelectorAll('.modal').forEach(modal => {
            if (modal.style.visibility !== 'visible') {
                modal.style.visibility = 'visible'
                this.style.transform = 'scale(1.1)'
            } else {
                modal.style.visibility = 'hidden'
                this.style.transform = 'scale(1)'
            }
        })
    })
})