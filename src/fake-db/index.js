import Mock from './mock';

import './db/auth';
import './db/catalog';
import './db/notification';

Mock.onAny().passThrough();
