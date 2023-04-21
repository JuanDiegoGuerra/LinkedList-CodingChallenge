const LinkedList = require('./challenge')
const assert = require('assert')

describe('UnitTests', function () {
  it('get_node_value_after_2_adds', function () {
    const list = new LinkedList()
    list.add(3)
    list.add(5)
    assert(list.get(1) === 5)
  })
  
  it ('get_first_node_value', function () {
    // Failure message: 
    // This test has no failure messages
    const list = new LinkedList()
    list.add(3)
    assert(list.get(0) === 3)
  })
  
  it ('multiple_adds_and_gets', function () {
    // Failure message: 
    // This test has no failure messages
    const list = new LinkedList()
    list.add(3)
    list.add(5)
    list.add(7)
    list.add(1)
    list.add(4)

    assert(list.get(0) === 3)
    assert(list.get(1) === 5)
    assert(list.get(2) === 7)
    assert(list.get(3) === 1)
    assert(list.get(4) === 4)
  })
})
