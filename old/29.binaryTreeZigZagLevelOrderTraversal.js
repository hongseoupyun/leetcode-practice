function zigzagLevelOrder(root) {
  if (!root) return [];

  let result = [];
  let queue = [root];
  let levelCount = 0;

  while (queue.length) {
    let length = queue.length;
    if (levelCount % 2 === 0) {
      result.push(queue.map((node) => node.val));
    } else {
      result.push(queue.map((node) => node.val).reverse());
    }
    levelCount++;
    while (length--) {
      let currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
  return result;
}
