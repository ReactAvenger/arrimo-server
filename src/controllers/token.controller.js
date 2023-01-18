const { renewUserToken } = require('../models/User');


async function httpRenewToken(req, res) {

    await renewUserToken(req, res);

}


module.exports = {
    httpRenewToken
}