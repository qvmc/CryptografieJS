const nacl = require('libsodium-wrappers');

let pubKey, privKey;

beforeAll(async () => {
    await nacl.ready
});

module.exports = {
    verifyingKey: async function ()
    {
        if(privKey == null)
        {
            var obj = nacl.crypto_sign_keypair();
            pubKey = obj.publicKey;
            privKey = obj.privateKey;
        }
        return pubKey;
    },
    sign: async function (signedMsg)
    {
        return nacl.crypto_sign(signedMsg, privKey);
    }
};
