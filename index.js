learn
function getName(node)
{
   return node.name
}

function headNode(list, collection)
{
  return collection[list]
}

function next(node, collection)
{
  return collection[node.next]
}

function nodeAt(index, list, collection)
{
  let currNode = headNode(list, collection)
  for (var i = 0; i < index; i++)
  {
    currNode = next(currNode, collection)
  }
  return currNode
}

function addressAt(index, list, collection)
{
  if (index === 0)
  {
    return list
  }
  else
  {
    let currNode = nodeAt(index-1, list, collection)
 //   console.log(`${currNode.name}, ${currNode.next} , ${index}`)
    return currNode.next
  }
}

function indexAt(node,collection,list)
{
  //console.log(node)
  let index = 0
  let currNode = headNode(list, collection)
  while(currNode != node)
  {
    //console.log(currNode)
    currNode = next(currNode, collection)
    index++
  }
  return index
}

function insertNodeAt(index, address, list, collection)
{ console.log(collection )

  console.log(index, address, list)
  let prevNode = nodeAt(index-1,list,collection)
  let storeNode = nodeAt(index,list,collection)
  
  collection[prevNode.next] = address
  collection[address.next] = storeNode
  
  console.log(collection)
  console.log("\n\n\n")
  
}

function deleteNodeAt(index)
{
  
}
