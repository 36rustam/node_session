const { Router } = require('express');
const router = Router();

// db
// const DB = require('../db/db.js');

router.get(
    '/',
    (req, res) => {
        // const foo = new DB();
        // foo.mas()
        res.render(
            `contactos`,
            {
                title: 'contactos',
                esContactos: true,
            }
        );
    }
);



module.exports = router;