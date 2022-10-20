
export const dashboardReducer = (initialState = [], action) => {
  
    console.log(action, 'action')
    switch (action.type) {
        case '':
            return { ...initialState };
        case 'country':
            return { ...initialState, selectedCountry: {  flag: '', name: action.payload } }
        default:
            return initialState;
    }
}
