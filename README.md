## How to solve this challenge?

1. Read the "Challenge description" below.
2. Make changes to the [challenge.js](./challenge.js) file.
3. Commit your changes.
4. Wait for the result of the "GitHub Classroom Workflow" action. If it is green - congratulations, you solved this challenge! If not - try again!
5. *You can watch an example of how to solve a challenge in the video linked in the theoretical lesson preceding this challenge.*

## Challenge description

### Lists  

Create your own LinkedList  class for storing integers which should include two methods:  
add(number) - Add a new Node to the end of the list with a value of number. Nothing needs to be returned. 
get(index) - Return the value of the Node at position `index` in the List.   

Example  

```

This is an example of a test case:  

const list = new LinkedList()

list.add(3)
list.add(5)
console.log(list.get(1))
// => 5
```


The 2 add operations create the list: [3, 5]. 
The get operation, gets the number located at position 1. 



### Troubleshooting

If you cannot see any auto-grading workflows on the [Actions](../../actions) page, learn how to fix it in [this repo](https://github.com/microverse-students/autograding-troubles-js/blob/main/README.md).
