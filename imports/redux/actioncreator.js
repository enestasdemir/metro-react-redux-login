export const creator = function (usr, pass, log) {
    //usr: Kullanıcı adı, pass: Parola, log: Doğrulama
    return {
        type: 't_user',
        usr: usr,
        pass: pass,
        log: log
    }
}