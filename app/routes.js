module.exports = function(app) {

    var nodemailer = require('nodemailer');
    var jwt = require("jsonwebtoken"),
        bcrypt = require("bcrypt-nodejs");

    //var transporter = nodemailer.createTransport('smtps://harko972%40gmail.com:harko3636@smtp.gmail.com');
    var smtpTransport = require('nodemailer-smtp-transport');
    var transporter = nodemailer.createTransport(smtpTransport({
        service: "Gmail",
        auth: {
            user: "harko972@gmail.com",
            pass: "ipczbvfdyoakqwzj"
        }
    }));
    app.post('/send-mail', function(req, res) {
        var data = req.body;

        transporter.sendMail({
            to: 'harko972@gmail.com',
            subject: data.name + ': ' + data.subject,
            text: data.name + '\n' + data.email + '\n\n' + data.content
        }, function(error, info){
            if(error){
                throw error;
            }
            res.json({
                success: true,
                message: 'Съобщението Ви бе изпратено!',
                infoo: info
            });
        }); 
    });

    app.post('/authenticate', function(req, res) {
        var user = { hristiyan: 'Hristiyan', harry: 'Harry', yaprakov: 'Yaprakov', password: '$2a$04$X/v1gEijcLoA6nOVVHpx4.WN.CXoA2Rqy7DPCipnBaaTpxv48S4sW' };

        if ( !bcrypt.compareSync(req.body.password, user.password) ) {
            res.json({ success: false, message: 'Грешна парола.' });
        } else {
            var token = jwt.sign(user, app.get('superSecret'), {
                expiresInMinutes: 1440 // expires in 24 hours
            });
            res.json({
                success: true,
                message: 'Успешно влизане!',
                token: token
            });
        }  
    });
    // Create a user
    /*
    app.get('/setup', function(req, res) {
        var krasi = new User({ 
            name: 'Matarov', 
            password: bcrypt.hashSync('matarov123'),
            admin: true 
        });
        krasi.save(function(err) {
            if (err) throw err;
            console.log('User saved successfully');
            res.json({ success: true });
        });
    });
    */
    // Helper function to check if authenticated
    function auth(req, res, next) {
        var token = req.body.token || req.query.token || req.headers['authorization'] || req.headers['x-access-token'];
        console.log(token);
        if (token) {
            jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
                if (err) {
                    return res.json({ success: false, message: 'Неуспешно удостоверяване.' });    
                } else {
                    req.decoded = decoded; 
                    next();
                }
            });
        } else {
            return res.status(403).send({ 
                success: false, 
                message: 'Достъп забранен.' 
            });
        }
    };

    var filesRouter = require('angular-filemanager-nodejs-bridge').router;
    var pathresolver = require('angular-filemanager-nodejs-bridge').pathresolver;

    pathresolver.baseDir = function() {
        return '/nodejs/yaprakov';
    };

    app.use('/files', filesRouter);

    // aplication index
        
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });

};
