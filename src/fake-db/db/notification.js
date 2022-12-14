import Mock from '../mock'
import shortId from 'shortid'

const NotificationDB = {
    list: [
        {
            id: shortId.generate(),
            heading: 'Azure DevOps',
            icon: {
                name: 'notifications',
                color: 'error',
            },
            timestamp: 1660722565000,
            title: 'Successful',
            subtitle: 'Build is done',
            path: 'chat',
        },
        {
            id: shortId.generate(),
            heading: 'App Registration',
            icon: {
                name: 'notifications',
                color: 'error',
            },
            timestamp: 1660722365000,
            title: 'Failed',
            subtitle: 'Error message',
            path: 'page-layouts/user-profile',
        },
        {
            id: shortId.generate(),
            heading: 'Alert',
            icon: {
                name: 'notifications',
                color: 'error',
            },
            timestamp: 1660721565000,
            title: 'Other Status',
            subtitle: 'More Details',
            path: 'chat',
        },
    ],
}

Mock.onGet('/api/notification').reply((config) => {
    const response = NotificationDB.list
    return [200, response]
})

Mock.onPost('/api/notification/add').reply((config) => {
    const response = NotificationDB.list
    return [200, response]
})

Mock.onPost('/api/notification/delete').reply((config) => {
    let { id } = JSON.parse(config.data)
    console.log(config.data)

    const response = NotificationDB.list.filter(
        (notification) => notification.id !== id
    )
    NotificationDB.list = [...response]
    return [200, response]
})

Mock.onPost('/api/notification/delete-all').reply((config) => {
    NotificationDB.list = []
    const response = NotificationDB.list
    return [200, response]
})
