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
//
