const initialState = {
    code: '',
    isCorrect: false,
};
const trueNum = '1234';
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'NUMBER':
            if (state.code.length < 4) {
                return {...state, code: state.code + action.value}
            }
            else {
                alert('Не больше 4');
                return {...state, code: state.code}
            }
        case 'REMOVE':
            return {...state, code: state.code.substring(0, state.code.length - 1)};
        case 'RESULT':
            if(state.code === trueNum) {
                alert('Right code');
                return {...state, isCorrect: true};
            }
            else {
                alert('Not correct');
                return {...state, isCorrect: false, code: ''}
            }
        default:
            return state
    }
};
export default reducer