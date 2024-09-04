self.addEventListener('fetch', function(event){
    if(event.request.url.includes('article-api-.com/artcle')){
        event.respondwhit(
            caches.match(event.request).then(function(response){
                return response || fetch(event.response).then(function(response){
                    return caches.open('mon-cache-api').then(function(caches){
                        caches.put(request, response.clone())
                        return response;
                    })
                })
            })
        )
    }

})