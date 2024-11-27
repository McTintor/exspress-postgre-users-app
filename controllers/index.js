const db = require('../db/queries');

const getUsers = async (req, res, next) => {
    const search = req.query.search || "";
    try {
        const usernames = await db.getAllUsernames(search);
        console.log("Usernames: ", usernames);
        res.render('index', {
            pageTitle: 'Users',
            path: '/',
            users: usernames,
            h1: 'Users'
        })
    } catch (err) {
        console.error("Error fetching usernames: ", err);
        res.status(500).json({error: "Internal server error"});
    }
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

const getDelete = async (req, res, next) => {
    try {
        await db.deleteAllUsernames(); // Call the function to delete all usernames
        console.log("All usernames have been deleted.");
        res.redirect('/');
      } catch (err) {
        console.error("Error deleting usernames:", err);
        res.status(500).json({ error: "Internal server error" });
      }
}

module.exports = {
    getUsers,
    getForm,
    postSaveUser,
    getDelete
}