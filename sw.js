const cacheStaticName = 'site-static'; //Change this if you change the cache assets!

const cacheAssets = [
    '/ScoutingApp2022/',
    '/ScoutingApp2022/index.html',
    '/ScoutingApp2022/main.html',
    '/ScoutingApp2022/summary.html',
    '/ScoutingApp2022/Css/summary.css',
    '/ScoutingApp2022/Css/index.css',
    '/ScoutingApp2022/Css/main.css',
    '/ScoutingApp2022/JS/index.js',
    '/ScoutingApp2022/pitScouting.html',
    '/ScoutingApp2022/planetPrimus.html',
    '/ScoutingApp2022/Css/pitScouting.css',
    '/ScoutingApp2022/JS/registration.js',
    '/ScoutingApp2022/JS/summary.js',
    '/ScoutingApp2022/missionHome.html',
    '/ScoutingApp2022/database-info.txt',
    '/ScoutingApp2022/Css/missionHome.css',
    '/ScoutingApp2022/JS/missionHome.js',
    '/ScoutingApp2022/help.html',
    '/ScoutingApp2022/JS/getTBA.js',
    '/ScoutingApp2022/background.png',
    '/ScoutingApp2022/bizScouting.html'
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