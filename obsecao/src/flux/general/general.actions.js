import generalConstants from './general.constants'

const showLoader = () => ({
    type: generalConstants.showLoader,
    state: {
        isLoading: true
    }
})

const hideLoader = () => ({
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