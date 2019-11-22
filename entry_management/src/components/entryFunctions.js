import axios from 'axios';

export const add = newHost => {
    return axios.post('host/add', {
            hostEmail: newHost.hostEmail,
            hostName: newHost.hostName,
            hostPhone: newHost.hostPhone,
            hostAddress: newHost.hostAddress
        })
        .then(res => {
            if (res.data.error) {
                const check = {
                    status: false,
                    error: res.data.error
                }
                return check
            }
            else {
                const check = {
                    status: true,
                    data: res.data
                }
                return check
            }
        })
}

export const checkin = newVisitor => {
    return axios.post('host/checkinVisitor', {
            hostName: newVisitor.hostName,
            hostEmail: newVisitor.hostEmail,
            visitorName: newVisitor.visitorName,
            visitorPhone: newVisitor.visitorPhone,
            visitorEmail: newVisitor.visitorEmail
        })
        .then(res => {
            if (res.data.error) {
                const check = {
                    status: false,
                    error: res.data.error
                }
                return check
            }
            else {
                const check = {
                    status: true,
                    data: res.data
                }
                return check
            }
        })
}

export const checkout = exitVisitor => {
    return axios.post('host/checkoutVisitor', {
            hostName: exitVisitor.hostName,
            hostEmail: exitVisitor.hostEmail,
            visitorEmail: exitVisitor.visitorEmail
        })
        .then(res => {
            if (res.data.error) {
                const check = {
                    status: false,
                    error: res.data.error
                }
                return check
            }
            else {
                const check = {
                    status: true,
                    data: res.data
                }
                return check
            }
        })
}





