// mock/index.js
import type { MockMethod } from 'vite-plugin-mock';
export default [{
  url: '/api/getMessages',
  method: 'get',
  response: () => {
    return {
      code: 200,
      data: {
        'NoteList|7': [{
        'id|+1': 1,
        'content|1-24': '@paragraph',
        'date':'@date',
        'userId|+1':1,
        'isLike':'@boolean',
        'label|0-10':0,
        'likeNum|0-100':0,
        'commentNum|0-100':0,
        'bgColor': '@color',
        'name': '@cname',
        'imageUrl': '@image(200x200)',
        'type': '@integer(0, 1)',
        'isRevoked': '@boolean',
        'isReport': '@boolean',
        'commentList|0-10': [{
          'id|+1': 1,
          'content|1-24': '@paragraph',
          'creat_time':'@date',
          'userId|+1':1,
          'name': '@cname',
          'imageUrl': '@image(200x200)', 
        }]
    }]
    }
    }
}
}] as MockMethod[];

// Mock.mock('/api/getMessages', 'get', {
//   'NoteList|20': [{
//     'id|+1': 1,
//     'content|1-24': '@paragraph',
//     'date':'@date',
//     'userId|+1':1,
//     'isLike':'@boolean',
//     'label|0-10':0,
//     'likeNum|0-100':0,
//     'commentNum|0-100':0,
//     'name': '@cname',
//     'imageUrl': '@image(200x200)',
//     'type': '@integer(0, 1)',
//     'isRevoked': '@boolean',
//     'isReport': '@boolean',
//     'commentList|0-10': [{
//       'id|+1': 1,
//       'content|1-24': '@paragraph',
//       'creat_time':'@date',
//       'userId|+1':1,
//       'name': '@cname',
//       'imageUrl': '@image(200x200)', 
//     }]
//   }]
// });

// Mock.mock('/api/getMessage', 'get', {
//   'NoteList|1': [{
//     'id|+1': 1,
//     'content|1-24': '@paragraph',
//     'commentList|0-10': [{
//       'id|+1': 1,
//       'content|1-24': '@paragraph',
//       'date':'@date',
//       'userId|+1':1,
//       'name': '@cname',
//       'imageUrl': '@image(200x200)',
//       'type': '@integer(0, 1)
//     }]
//   }]
// });
