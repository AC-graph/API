const pages = {
    "guide": {
        "content": () => import('../pages/guide.iCrush')
    },
    "api": {
        "content": () => import('../pages/api/index.iCrush'),
        "object":{
            "content": () => import('../Pages/api/object.iCrush')
        },
        "directive":{
            "content": () => import('../Pages/api/directive.iCrush')
        },
        "series":{
            "content": () => import('../Pages/api/series.iCrush')
        },
        "_default_": "object"
    },
    "course": {
        "content": () => import('../pages/course/index.iCrush')
    },
    "_default_": "guide"
};


export function loadRouter(doback, deep) {

    let routers = (window.location.href + "#").split("#")[1].replace(/\?.{0,}$/, '').replace(/^\//, '').replace(/\/$/, '').split('/'), page = pages;
    for (let i = 0; i < deep; i++) {
        page = page[routers[i]] || page[page['_default_']];
    }
    page.content().then(function (data) {
        doback(data.default);
    });

};

export function goRouter(doback, keyArray) {

    let page = pages, router = "#";
    for (let i = 0; i < keyArray.length; i++) {
        page = page[keyArray[i]] || page[page['_default_']];
        router += "/" + keyArray[i];
    }

    page.content().then(function (data) {
        doback(data.default);
    });

    window.location.href = router;

};
