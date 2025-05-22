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
document.querySelectorAll('.botaoModal, .fechar, .fecharBotao').forEach(botao => {
    botao.addEventListener('click', function () {
        document.querySelector('.botaoModal img').classList.toggle('icon-mais')
        document.querySelector('.botaoModal').style.transform = 'scale(1)'

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

// Alternando header conforme url
document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.icon')
    const buttons = document.querySelectorAll('.bottom-menu a')

    if (window.location.pathname.endsWith('lembretes.html')) {
        icons[0].classList.add('icon-lembretes')
    } else if (window.location.pathname.endsWith('index.html')) {
        icons[1].classList.add('icon-inicio')
        buttons[0].style.transform = 'scale(1.1)'
    } else if (window.location.pathname.endsWith('menuGuias.html')) {
        icons[2].classList.add('icon-guia')
        buttons[1].style.transform = 'scale(1.1)'
    } else if (window.location.pathname.endsWith('faq.html')) {
        icons[3].classList.add('icon-ajuda')
        buttons[2].style.transform = 'scale(1.1)'
    } else if (window.location.pathname.endsWith('perfil.html')) {
        document.querySelector('.perfil').classList.add('icon-perfil')
        buttons[2].style.transform = 'scale(1.1)'
        icons[0].classList.remove('icon-lembretes')
    }
})


// document.querySelectorAll('.icon').forEach(icon => {
//     if (icon.dataset.page === currentPage) {
//         icon.classList.add('active-icon');
//     }
// });