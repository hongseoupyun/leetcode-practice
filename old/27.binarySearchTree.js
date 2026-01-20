//binary tree is data structure where the tree has maximum of 2 nodes

//binary search tree is binary tree data structure where each node is greater than every node in its left sub tree and less than every node in its right sub tree.

//Binary search tree is very fast and useful because you can eliminate half of the nodes as you compare nodes. eg) if node that you are fininding it less than root node, you will only find left subtree of the node.

//depth first search=>visit nodes vertically first before horizontally :use stack : branch by branch
//pre order/ in order/post order
//pre order => <root> -> <left> -> <right>
//in order =>  <left> -> <root> -> <right>
//post order=> <left> -> <right> -> <root>

//breadth first searc(level order traversal)=>visit nodes at the same level first and goes to next level : use queue : level by level
//level order

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.count = 1;
    this.root = new Node(value);
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;
    let newNode = new Node(value);

    const searchTree = (node) => {
      //if value < node.value, go left
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      }
      //if value > node.value, go right
      else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }

  min() {
    //start from root , keep going left untill there is no more child node
    let currentNode = this.root;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
  max() {
    //start from root, keep going right untill there is no more child node
    let currentNode = this.root;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
  contain(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  //depth first search

  //in-order
  //left-root-right
  //2, 3, 12, 15, 28, 36, 39
  dfsInOrder() {
    let result = [];

    const traverse = (node) => {
      //if left child exists , go left again
      if (node.left) traverse(node.left);
      //capture root node value
      result.push(node.value);
      //if right child exists, go right again
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return result;
  }

  //pre-order
  //root-left-right
  //15, 3, 2, 12, 36, 28, 39
  dfsPreOrder() {
    let result = [];

    const traverse = (node) => {
      //capture root value
      result.push(node.value);
      //if left child exists, go left again
      if (node.left) traverse(node.left);
      //if right child exists, go right again
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  //post-order
  //left-right-root
  //2, 12, 3, 28, 39, 36, 15
  dfsPostOrder() {
    let result = [];

    const traverse = (node) => {
      //if left child exists, go left again
      if (node.left) traverse(node.left);
      //if right child exists, go right again
      if (node.right) traverse(node.right);
      //capture root value
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  //breadth first search(level-order traverse)
  bfs() {
    let result = [];
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
      let currentNode = queue.shift();

      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }
}

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

const callIt = () => {
  setTimeout(() => {
    console.log(bst.root);
    console.log("size of the tree: ", bst.size()); //7
    console.log("min node value from the tree: ", bst.min()); //2
    console.log("max node value from the tree: ", bst.max()); //39
    console.log("It contains 2", bst.contain(2)); //true
    console.log("It contains 9", bst.contain(9)); //false
    console.log("dfs in-order: ", bst.dfsInOrder()); //[2,3,12,15,28,36,39]
    console.log("dfs pre-order: ", bst.dfsPreOrder()); //[15,3,2,12,36,28,39]
    console.log("dfs post-order: ", bst.dfsPostOrder()); //[2,12,3,28,39,36,15]
    console.log("bfs search", bst.bfs()); //[15,3,36,2,12,28,39]
  }, 500);
};
callIt();
