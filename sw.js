const cacheStaticName = 'site-static'; //Change this if you change the cache assets!

const cacheAssets = [
    '/ScoutingApp_2.0/',
    '/ScoutingApp_2.0/index.html',
    '/ScoutingApp_2.0/main.html',
    '/ScoutingApp_2.0/summary.html',
    '/ScoutingApp_2.0/Css/summary.css',
    '/ScoutingApp_2.0/Css/index.css',
    '/ScoutingApp_2.0/Css/main.css',
    '/ScoutingApp_2.0/JS/index.js',
    '/ScoutingApp_2.0/pitScouting.html',
    '/ScoutingApp_2.0/planetPrimus.html',
    '/ScoutingApp_2.0/Css/pitScouting.css',
    '/ScoutingApp_2.0/JS/registration.js',
    '/ScoutingApp_2.0/JS/summary.js',
    '/ScoutingApp_2.0/missionHome.html',
    '/ScoutingApp_2.0/database-info.txt',
    '/ScoutingApp_2.0/Css/missionHome.css',
    '/ScoutingApp_2.0/JS/missionHome.js',
    '/ScoutingApp_2.0/help.html',
    '/ScoutingApp_2.0/JS/getTBA.js',
    '/ScoutingApp_2.0/background.png',
    '/ScoutingApp_2.0/bizScouting.html'
];

// Calling the Install Event
self.addEventListener('install', e => {
    // console.log('Service Worker: Installed');
    e.waitUntil(
        caches.open(cacheStaticName)
        .then(cache => {
            cacheAssets.forEach(val => {
                    cache.add(val)
                })
                //Run a forEach that caches all the files like this above
            console.log('Service Worker: caching files for offline');
        })
    )
});

//Call Active Events

self.addEventListener('activate', e => {
    console.log('Service Worker: Activated');
    // Removes unwanted caches
    e.waitUntil(
        caches.keys().then(cacheStaticName => {
            return Promise.all(
                cacheStaticName.map(cache => {
                    if (cache !== cacheStaticName) {
                        console.log('Service Worker Clearing');
                        return caches.delete(caches);
                    }
                })
            )
        })
    );
});

//Calls Fetch Event (Offline)
self.addEventListener('fetch', e => {
    console.log('Service: Fetching');
    caches.open(cacheStaticName)
    e.respondWith(
        caches.match(e.request).then(cacheResponse => {
            return cacheResponse || fetch(e.request);
        }).catch(error => {
            console.log('Error', error);
        })
    )
});