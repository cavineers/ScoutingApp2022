  // Checking for Service Worker Support
    /* if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('/sw.js')
                .then((reg) => {
                    document.getElementById('swConnect').style.background = 'green';
                    console.log('Service Worker is registered')
                })
                .catch((err) => console.log(`Service Worker: Error: ${err}`));

        })

    }  */

  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/ScoutingApp_2.0/sw.js')
          .then((reg) => console.log('Service Worker Registered'))
          .catch((err) => console.log(`Service Worker Error ${err}`))
  }