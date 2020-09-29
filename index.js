const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware


const initialState = {
    loading: false,
    job_posting: [],
    error_msg: ''
}

const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST'
const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS'
const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE'


const fetchJobsRequest = () => {
    return {
        type: FETCH_JOBS_REQUEST
    }
}


const fetchJobsSuccess = jobs => {
    return {
        type: FETCH_JOBS_SUCCESS,
        success_data: jobs
    }
}


const fetchJobsFailure = error => {
    return {
        type: FETCH_JOBS_FAILURE,
        error_data: error
    }
}


const fetchJobs = () => {
    return function (dispatch) {
        dispatch(fetchJobsRequest())
        axios
            .get('https://remotive.io/api/remote-jobs?limit=3')
            .then(response => {
                const all_jobs = response.data
                const jobs = all_jobs.jobs.map(function (job) {
                    return {
                        job_id: job.id,
                        job_title: `${job.title} [${job.category}]`,
                        company_hiring: job.company_name,
                        job_type: job.job_type,
                        location: job.candidate_required_location,
                        application_link: job.url
                    }
                })

                dispatch(fetchJobsSuccess(jobs))
            })
            .catch(error => {
                dispatch(fetchJobsFailure(error.message))
            })
    }
}






const reducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case FETCH_JOBS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_JOBS_SUCCESS:
            return {
                ...state,
                loading: false,
                job_posting: action.success_data,
            }
        case FETCH_JOBS_FAILURE:
            return {
                ...state,
                loading: false,
                error_msg: action.error_data
            }
    }
}

const store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
store.dispatch(fetchJobs())
store.subscribe(() => {
    const state = store.getState()
    console.log(state)
})