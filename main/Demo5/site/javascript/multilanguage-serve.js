// detects the languages and structures them in an array
var languages = navigator.languages;


// variables created to use the findIndex() method
var languageEN = (lang) => lang == "en";
var languageEL = (lang) => lang == "el";


if (Cookies.get('loaded') == 'true') {
    if (Cookies.get('lang') == 'en') {
        Cookies.set('lang', 'en', { expires: 30 });
        if (JSON.stringify(window.location.pathname).includes("en") == false) {
            let websitePage = JSON.stringify(window.location.pathname);
            let websitePageGreekToEnglish = websitePage.replace('gr', 'en');

            window.location.href = JSON.parse(websitePageGreekToEnglish);
        };
    } else {
        Cookies.set('lang', 'gr', { expires: 30 });
        if (JSON.stringify(window.location.pathname).includes("gr") == false) {
            let websitePage = JSON.stringify(window.location.pathname);
            let websitePageEnglishToGreek = websitePage.replace('en', 'gr');

            window.location.href = JSON.parse(websitePageEnglishToGreek);
        };
    };
} else {
    if (languages.findIndex(languageEN) || languages.findIndex(languageEL) != -1) {
        if (languages.findIndex(languageEN) < languages.findIndex(languageEL)) {
            if (JSON.stringify(window.location.pathname).includes("en") == false) {
                let websitePage = JSON.stringify(window.location.pathname);
                let websitePageGreekToEnglish = websitePage.replace('gr', 'en');

                window.location.href = JSON.parse(websitePageGreekToEnglish);
                Cookies.set('lang', 'en', { expires: 30 });
                Cookies.set('loaded', 'true', { expires: 30 });
            } else {
            Cookies.set('lang', 'en', { expires: 30 });
            Cookies.set('loaded', 'true', { expires: 30 });
            };
        } else {
            if (JSON.stringify(window.location.pathname).includes("gr") == false) {
                let websitePage = JSON.stringify(window.location.pathname);
                let websitePageEnglishToGreek = websitePage.replace('en', 'gr');

                window.location.href = JSON.parse(websitePageEnglishToGreek);
                Cookies.set('lang', 'gr', { expires: 30 });
                Cookies.set('loaded', 'true', { expires: 30 });
            } else {
            Cookies.set('lang', 'gr', { expires: 30 });
            Cookies.set('loaded', 'true', { expires: 30 });
            };
        };
    } else {
        window.location.href = "../en/index.html";
        Cookies.set('loaded', 'true', { expires: 30 });
    };
};