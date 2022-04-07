const ADMIN_USERS = ["Ada", "Greta", "Vim", "Tim"]

function adminUsers(req, res, next) {
    if (ADMIN_USERS.includes(req.query.user)) {
        next()
    } else {
        res.send("No tienes los privilegios para ingresa");
    }
}

module.exports = adminUsers
