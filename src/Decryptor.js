const nacl = require('libsodium-wrappers')

beforeAll(async () => {
    await nacl.ready
})

var cryptKey;

module.exports = {

    setKey: function (key)
    {
        cryptKey = key;
    },

    decrypt: async function (ciphertext, nonce)
    {
        if(cryptKey == null){
            throw 'no key'
        }

        return nacl.crypto_secretbox_open_easy(ciphertext, nonce, cryptKey)
    }
};