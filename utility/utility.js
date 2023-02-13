
module.exports = {
    setAuthenticated: setAuthenticated
}


function setAuthenticated (req, res) {
    if (req.isAuthenticated) {
        res.locals.user = req.user;
    }
}