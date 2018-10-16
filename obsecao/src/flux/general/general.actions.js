import generalConstants from './general.constants'

const showLoader = dispatch => dispatch({
    type: generalConstants.showLoader,
    state: {
        isLoading: true
    }
})

const hideLoader = dispatch => dispatch({
    type: generalConstants.hideLoader,
    state: {
        isLoading: false
    }
})

const generalActions = {
    hideLoader,
    showLoader
}

export default generalActions