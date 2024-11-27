const db = require('../db/queries');

const getUsers = async (req, res, next) => {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.render('index', {
        pageTitle: 'Users',
        path: '/',
        users: usernames,
        h1: 'Users'
    })
}

const getForm = async (req, res, next) => {
    res.render('form' , {
        pageTitle: 'Add New User',
        path: '/new',
        h1: 'Add New User'
    })
}

const postSaveUser = async (req, res, next) => {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
}

module.exports = {
    getUsers,
    getForm,
    postSaveUser
}