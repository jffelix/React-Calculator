const controllers = {
    getTitle: function(req, res) {
        res.status(200).send("React Calculator"); 
    }
}

module.exports = controllers;