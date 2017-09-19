import Ls from './ls'

export default {

    login (loginData) {
        return axios.post('/api/auth/login', loginData).then(response => {
            Ls.set('auth.token', response.data.access_token)
            Ls.set('auth.expires_in', response.data.expires_in)
            Ls.set('auth.token_type', response.data.token_type)
        }).catch(error => {
            if (error.response.status === 401) {
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message)
            }
        })
    },

    register (registerData) {
        return axios.post('/api/auth/register', registerData).then(response => {
            console.log(response)
        }).catch(error => {
            if (error.response.status === 401) {
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message)
            }
        })
    },

    logout () {
        return axios.get('/api/auth/logout').then(response => {
            console.log(response)
            Ls.remove('auth.token')
        }).catch(error => {
            console.log('Error', error.message)
        })
    },

    check () {
        return axios.get('/api/auth/check').then(response => {
            // Check For Passport Token and Expiration
            // Passport Expired in 15 Days , Refresh Token 30 Days
            if (Ls.get('access_token') !== undefined) {
                return true
            }
            // Using Laravel Login Scafold If Any
            return !!response.data.authenticated
        }).catch(error => {
            console.log('Error', error.message)
        })
    },
    checkIsAdmin () {
        return axios.get('/api/auth/checkIsAdmin').then(response => {
            return response.data.admin
        }).catch(error => {
            console.log('Error', error.message)
        })
    }

}
