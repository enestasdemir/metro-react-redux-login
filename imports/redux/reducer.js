export const catcher = (state = null, action) => {

    switch (action.type) {
        case 't_user':
            return {
                USER: action.usr,
                PASS: action.pass,
                LOG: action.log
            };
        default:
            return {state: null};
    }
}