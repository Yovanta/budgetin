const express =  require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan');
const {addPemasukan, loadSaldo} = require('./utils/pemasukan');
const { loadHistori, addPengeluaran } = require('./utils/pengeluaran');
// const { mongoConnect } = require('./database_connect/utils/db_conn.js');

const app = express();
const port = 8080;

// To support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

//setup ejs
app.set('view engine', 'ejs');

// third-party middleware
app.use(expressLayouts);
app.use(morgan('dev'));

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


app.get('/masuk', (req, res) => {
    res.render('masuk', {
        layout: 'layouts/user-layout',
        title:'Halaman Masuk'});
});

const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}

// This will hold the users and authToken related to users
const authTokens = {};

app.post('/masuk', (req, res) => {
    const { email, password } = req.body;
    // const hashedPassword = getHashedPassword(password);

    // const user = users.find(u => {
    //     return u.email === email && hashedPassword === u.password
    // });

    // if (user) {
    //     const authToken = generateAuthToken();

    //     // Store authentication token
    //     authTokens[authToken] = user;

    //     // Setting the auth token in cookies
    //     res.cookie('AuthToken', authToken);

    //     // Redirect user to the protected page
    //     res.redirect('/tentang');
    // } else {
    //     res.render('masuk', {
    //         message: 'Invalid username or password',
    //         messageClass: 'alert-danger'
    //     });
    // }
        res.redirect('/');
});


app.use((req, res, next) => {
    // Get auth token from the cookies
    const authToken = req.cookies['AuthToken'];

    // Inject the user to the request
    req.user = authTokens[authToken];

    next();
});

// const requireAuth = (req, res, next) => {
//     if (req.user) {
//         next();
//     } else {
//         res.render('masuk', {
//             message: 'Please login to continue',
//             messageClass: 'alert-danger'
//         });
//     }
// };

// app.get('/', requireAuth, (req, res) => {
//     res.render('index', {
//         layout: 'layouts/main-layout', 
//         title:'Halaman Utama'});
// });

app.get('/tentang', (req, res) => {
    res.render('tentang', {
        layout: 'layouts/main-layout',        
        title:'Halaman Tentang'});
});

app.get('/', (req, res) => {
    const pemasukan = loadSaldo();
    res.render('index', {
        layout: 'layouts/main-layout', 
        title:'Halaman Utama',
        pemasukan,
    });

    if (req.user) {
        res.render('index', {
            layout: 'layouts/main-layout', 
            title:'Halaman Utama'});
    } else {
        res.render('masuk', {
            message: 'Please login to continue',
            messageClass: 'alert-danger'
        });
    }
});

app.get('/add', (req, res) => {
    const pengeluaran = loadHistori();
    res.render('add-histori', {
        layout: 'layouts/main-layout', 
        title:'Form tambah pengeluaran',
        pengeluaran
    });
    res.redirect('/');
});

app.post('/', (req, res) => {
    addPemasukan(req.body);
    addPengeluaran(req.body);
    res.redirect('/');
});

// app.get('/masuk', (req, res) => {
//     res.render('masuk', {
//         layout: 'layouts/user-layout',title:'Halaman Masuk'});

// });

app.get('/daftar', (req, res) => {
    res.render('daftar', {
        layout: 'layouts/user-layout',
        title:'Halaman Daftar'});
});

const crypto = require('crypto');

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}

const users = [
    // This user is added to the array to avoid creating a new user on each restart
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@email.com',
        // This is the SHA256 hash for value of `password`
        password: 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg='
    }
];

app.post('/daftar', (req, res) => {
    const { email, password, confirmPassword } = req.body;

    // // Check if the password and confirm password fields match
    // if (password === confirmPassword) {

    //     // Check if user with the same email is also registered
    //     if (users.find(user => user.email === email)) {

    //         res.render('daftar', {
    //             message: 'User already registered.',
    //             messageClass: 'alert-danger'
    //         });

    //         return;
    //     }

    //     const hashedPassword = getHashedPassword(password);

    //     // Store user into the database if you are using one
    //     users.push({
    //         email,
    //         password: hashedPassword
    //     });

    // }  
    // else {
    //     res.render('daftar', {
    //         message: 'Password does not match.',
    //         messageClass: 'alert-danger'
    //     });
    // };

    res.render('masuk', {
        layout: 'layouts/user-layout',
        title:'Halaman masuk'});
});

// app.get('/', (req, res) => {
//     const pemasukan = loadSaldo();
//     const pengeluaran = loadHistori();
//     res.render('index', {
//         layout: 'layouts/main-layout', 
//         title:'Halaman Utama'});
//         pengeluaran;
//         pemasukan;

//     if (req.user) {
//         res.render('index');
//     } else {
//         res.render('masuk', {
//             message: 'Please login to continue',
//             messageClass: 'alert-danger'
//         });
//     }
// });

app.use((req, res) => {
    res.status(404);
    res.send('<h1>404 Not Found</h1>');
});

// app.listen(port, async () => {
//     try {
//         await mongoConnect();
//         console.log(`Mongo Budgetin | Listening at http://localhost:${port}`);
//     } catch (e) {
//         console.log(e);
//     }
// })

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/masuk ...`);
});