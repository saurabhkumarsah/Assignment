const CheckIsFreeAppUser = function (req, res, next) {
    const isFreeAppUser = req.headers.isfreeappuser
    if (isFreeAppUser) {
        next()
    } else {
        res.send({ Status: false, Message: "Header isFreeAppUser is mandatory" })
    }
}

module.exports.CheckIsFreeAppUser = CheckIsFreeAppUser