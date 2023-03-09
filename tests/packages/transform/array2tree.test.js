const array = [
  {id: '1', parentId: '0', value: 'a'},
  {id: '1-1', parentId: '1', value: 'b'},
  {id: '1-2', parentId: '1', value: 'c'},
  {id: '1-1-1', parentId: '1-1', value: 'd'},
  {id: '1-2-1', parentId: '1-2', value: 'e'},

  {id: '3', parentId: '2', value: 'aa'},
  {id: '3-1', parentId: '3', value: 'bb'},
  {id: '3-2', parentId: '3', value: 'cc'},
]

const tree = [
  {
    id: '1',
    pId: '0',
    val: 'a', 
    children: [
      {
        id: '1-1',
        pId: '1',
        val: 'b', 
        children: [
          {
            id: '1-1-1',
            pId: '1-1',
            val: 'd', 
            children: []
          }
        ]
      },
      {
        id: '1-2',
        pId: '1',
        val: 'c', 
        children: [
          {
            id: '1-2-1',
            pId: '1-2',
            val: 'e', 
            children: []
          }
        ]
      }
    ]
  },
  {
    id: '3',
    pId: '2',
    val: 'aa',
    children: [
      {
        id: '3-1',
        pId: '3',
        val: 'bb',
        children: [
    
        ]
      },
      {
        id: '3-2',
        pId: '3',
        val: 'cc',
        children: [
    
        ]
      }
    ]
  }
]

const { TransformArray2Tree } = require('../../index');

test('convertArray2Tree test: ', () => {
  expect(TransformArray2Tree(array)).toEqual(tree);
})
