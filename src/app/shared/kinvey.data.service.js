var dataServer = (function () {
    const kinvey_APP_ID = 'kid_SytMrExBg',
        kinvey_APP_SECRET = 'fc030205b84c4104988e3749d45d37a7',
        kinvey_MASTER_SECRET = '73ee4f354d624c0b8f01276f1b399cda',
        kinvey_URL = 'https://baas.kinvey.com/',
        USERNAME_STORAGE_KEY = 'username-key',
        AUTH_KEY_STORAGE_KEY = 'auth-key-key',
        APP_ID = 'co50xbssvfni5o0s',
        ACCESS_TOKEN = 'v0yhnv1ybqbskxn24rt6qbu3fmi3whmz';

    // start users
    function userRegister(user) {
        let authBase64 = btoa(kinvey_APP_ID + ":" + kinvey_APP_SECRET);
        let registerURL = kinvey_URL + 'user/' + kinvey_APP_ID;
        let registerData = {
            username: user.username,
            password: user.password
        };
        var register = new Promise(function (resolve, reject) {
            $.ajax({
                url: registerURL,
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(registerData),
                Authorization: "Basic " + authBase64,
                success: function (user) {
                    localStorage.setItem(USERNAME_STORAGE_KEY, user.username);
                    localStorage.setItem(AUTH_KEY_STORAGE_KEY, user.authKey);
                    resolve(user);
                }
            });
        });
        return register;
    }

    function userLogin(user) {
        let authBase64 = btoa(kinvey_APP_ID + ":" + kinvey_APP_SECRET);
        let loginURL = kinvey_URL + 'user/' + kinvey_APP_ID + '/login';
        let loginData = {
            username: user.username,
            password: user.password
        };
        var login = new Promise(function (resolve, reject) {
            $.ajax({
                url: loginURL,
                method: "POST",
                headers: { "Authorization": "Basic " + authBase64 },
                data: JSON.stringify(loginData),
                contentType: 'application/json',
                success: function (user) {
                    localStorage.setItem(USERNAME_STORAGE_KEY, user.username);
                    localStorage.setItem(AUTH_KEY_STORAGE_KEY, user.authtoken);
                    resolve(user);
                }
            });
        });
        return login;
    }

    function userLogout() {
        var logout = new Promise(function (resolve, reject) {
            localStorage.removeItem(AUTH_KEY_STORAGE_KEY);
            localStorage.removeItem(USERNAME_STORAGE_KEY);
            resolve();
        });

        return logout;
    }

    function userGetCurrent() {
        return Promise.resolve(localStorage.getItem(USERNAME_STORAGE_KEY) || 'anonymous');
    }
    // end users
    //start get book
    function getBook() {
        let authBase64 = btoa(kinvey_APP_ID + ":" + kinvey_MASTER_SECRET);
        let loginURL = kinvey_URL + 'appdata/' + kinvey_APP_ID + '/online';

        var book = new Promise(function (resolve, reject) {
            $.ajax({
                url: loginURL,
                method: "GET",
                headers: { "Authorization": "Basic " + authBase64 },
                success: function (data) {
                    resolve(data);
                }
            });
        });
        return book;

    }
    getBook();
    //end get book
    //gallery images
    function getImages() {
        var images = new Promise(function (resolve, reject) {
            var sortExp = { "Filename": 1 };
            $.ajax({
                type: "GET",
                url: `https://api.everlive.com/v1/${APP_ID}/Files`,
                headers: {
                    "Authorization": ACCESS_TOKEN,
                    "X-Everlive-Sort": JSON.stringify(sortExp)
                },
                contentType: "application/json",
                success: function (data) {
                    resolve(data);
                },
                error: function (error) {
                    reject(error);
                }
            });
        });
        return images;
    }
    //end gallery images
    //contact us
    function contactUs() {
        var contactUs = new Promise(function (resolve, reject) {
            var object = { 
                "name": $("#contact-name").val(),
                "email": $("#contact-email").val(),
                "message": $("#contact-message").val() 
            };
            $.ajax({
                type: "POST",
                url: `https://api.everlive.com/v1/${APP_ID}/contactUs`,
                headers: { "Authorization": ACCESS_TOKEN },
                contentType: "application/json",
                data: JSON.stringify(object),
                success: function (data) {
                    resolve(data);
                    console.log(JSON.stringify(data));
                },
                error: function (error) {
                    reject(error);
                    console.log(JSON.stringify(error));
                }
            });
        });
        return contactUs;
    }

    //end contact us
    return {
        users: {
            register: userRegister,
            login: userLogin,
            logout: userLogout,
            current: userGetCurrent
        },
        get: {
            book: getBook
        },
        images: {
            get: getImages
        },
        contacts:{
            send:contactUs
        }
    };
})();

export { dataServer };