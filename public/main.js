
if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('sw.js').then(function(reg) {
        console.log(':^)', reg);
        reg.pushManager.subscribe({
            userVisibleOnly: true
        }).then(function(sub) {
            var str = sub.endpoint;
            var strend  = str.substring(40, str.length);
            localStorage.setItem("endpoint", strend);
            
        });
    }).catch(function(error) {
        console.log(':^(', error);
    });
}