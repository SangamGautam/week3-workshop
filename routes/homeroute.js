module.exports = {
    route: (app, path) => {
        // Serving the root URL with the login page
        app.get('/', function (req, res) {
            let filepath = path.resolve('./www/login.html');
            res.sendFile(filepath);
        });

        // Serving the /login page
        app.get('/login', function (req, res) {
            let filepath = path.resolve('./www/login.html');
            res.sendFile(filepath);
        });

        // Serving the /account page
        app.get('/account', function (req, res) {
            let filepath = path.resolve('./www/account.html');
            res.sendFile(filepath);
        });
    }
};
