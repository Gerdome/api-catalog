import Mock from '../mock'
import shortId from 'shortid'

const catalogDB = {
    apiList: [
        {
          name: 'petstore',
          owner: 'Gerrit',
          type: 'openapi',
          description: 'This is a description.',
        },
        {
          name: 'star-wars',
          owner: 'Joachim',
          type: 'graphql',
          description: 'This is a description.',
        },
        {
          name: 'some-grpc',
          owner: 'Conradin',
          type: 'grpc',
          description: 'This is a description.',
        },
        {
          name: 'some-async',
          owner: 'Some Dude',
          type: 'asyncapi',
          description: 'This is a description.',
        },
        {
          name: 'another-openapi',
          owner: 'Another Dude',
          type: 'openapi',
          description:'This is a description.',
        }
    ],
    userList: [
        {
            id: '1',
            name: 'John Doe',
        },
        {
            id: '323sa680b3249760ea21rt47',
            name: 'Frank Powell',
        },
        {
            id: '7863a6802ez0e277a0f98534',
            name: 'John Doe',
        },
    ],
}

Mock.onGet('/api/catalog/api-list').reply((config) => {
    const response = catalogDB.apiList
    return [200, response]
})