// This module stores the parse keys
// It is in .gitignore in order to keep them secret
// You will need to sign up for parse and use your own keys
// Accounts are free at www.parse.com
//
// The keys can be accessed by including the keys module and 
// calling KeySvc.key1, KeySvc.key2
angular.module('keys', [])

.factory('KeySvc', function() {
    return {
        //App Key
        key1:"kwZgRqB6S99pcLRMg7jQgnEvYdYTUxSYOUA7ZB1h",
        //JavaScript Key
        key2:"vzTt8V6KhJzrkJ1FayJyD2Ia3mJz4YdLBpZj6hFs",
        //REST API Key
        key3:"ByPThMaSDVfmflkaT0n6UzvUFAO3UnkiCHUioOcs"
    };
});
