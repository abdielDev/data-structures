import Queue from "../queues/queue.js";

export default function	hotPotato(elementsList,	num)	{
  const	queue	=	new	Queue();	//	{1}
  const	eliminatedList	=	[];
  for	(let	i	=	0;	i	<	elementsList.length;	i++)	{
      queue.enqueue(elementsList[i]);	//	{2}
  }
  while	(queue.size()	>	1)	{
      for	(let	i	=	0;	i	<	num;	i++)	{
          queue.enqueue(queue.dequeue());	//	{3}
      }
      eliminatedList.push(queue.dequeue());	//	{4}
  }
  return	{
      eliminated:	eliminatedList,
      winner:	queue.dequeue()	//	{5}
  };
}