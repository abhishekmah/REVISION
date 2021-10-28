const User = require('../models/user.model')
const authorize = (permittedRoles) => async function (req, res, next) {
    const { user } = req.user;
    const user1 = await User.findById(user.id);
    const subscriptionType = user1.subscriptionType;
    const isPermitted = permittedRoles.filter(role => role == subscriptionType);

    if (isPermitted.length > 0) {
        next();
    } else {
        return res.status(403).json({ status: 'failed', message: 'permission denied' })
    }
}

module.exports = authorize;