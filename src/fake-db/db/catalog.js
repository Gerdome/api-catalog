import Mock from '../mock'
import shortId from 'shortid'

const catalogDB = {
    apiList: [
        {
          id: '1',
          name: 'petstore',
          version: '1.0.0',
          state: 'active',
          ownerObjectId: '1',
          dataSourceId: '1',
          notificationMailAddress: 'gerrit.merz@ipt.ch',
          type: 'openapi',
          description: 'This is a description.',
          openapi: 'https://petstore.swagger.io/v2/swagger.json'
        },
        {
          id: '2',
          name: 'spotify',
          version: '1.0.0',
          state: 'active',
          ownerObjectId: '1',
          dataSourceId: '1',
          notificationMailAddress: 'gerrit.merz@ipt.ch',
          type: 'graphql',
          description: 'This is a description.',
          openapi: 'https://spotify-data-api.herokuapp.com/openapi.json'
        },
        {
          id: '3',
          name: 'api-catalog',
          version: '1.0.0',
          state: 'active',
          ownerObjectId: '2',
          dataSourceId: '2',
          notificationMailAddress: 'gerrit.merz@ipt.ch',
          type: 'grpc',
          description: 'This is a description.',
          openapi: 'https://raw.githubusercontent.com/Gerdome/api-catalog/main/catalog_oas.json'
        }
    ],
    dataSourceList: [
        {
            id: '1',
            name: 'CRM XYZ'
        },
        {
            id: '2',
            name: 'Syrius XY'
        },
        {
            id: '3',
            name: 'OtherDB'
        }
    ],
    objectOwnerList: [
        {
            id: '1',
            name: 'Team A',
        },
        {
            id: '2',
            name: 'Team B',
        },
        {
            id: '3',
            name: 'Team C',
        },
    ],
}

Mock.onGet('/api/catalog/api-list').reply((config) => {
    const response = catalogDB.apiList
    return [200, response]
})

Mock.onGet('/api/catalog/data-source-list').reply((config) => {
    const response = catalogDB.dataSourceList
    return [200, response]
})

Mock.onGet('/api/catalog/object-owner-list').reply((config) => {
    const response = catalogDB.objectOwnerList
    return [200, response]
})



// get list datasources

// possible: API kann mehrere Datasources konsumieren

// get list app registrations/ API

// post new api: name, datasource id, version etc.

// falls schon vorhanden --> Fehler abfangen etc.