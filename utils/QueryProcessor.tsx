export default function QueryProcessor(query: string): string {
  var isSquare = function (n : number)  {
    return Math.sqrt(n) % 1 === 0;
};

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  const multMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  const minusMatch = query.match(/What is (\d+) minus (\d+)/);
  const sqroMatch = query.match(/Which of the following numbers is both a square and a cube:(\d+), (\d+), (\d+), (\d+)/);
  if (sqroMatch) {
    const a: number = parseInt(sqroMatch[1])
    const b: number = parseInt(sqroMatch[2])
    const c: number = parseInt(sqroMatch[3])
    const d: number = parseInt(sqroMatch[4])
    if (isSquare(a) && Number.isInteger(a))
       return (a.toString()); 
    if (isSquare(b) && Number.isInteger(b))
       return (b.toString()); 
    if (isSquare(c) && Number.isInteger(c))
       return (c.toString()); 
    if (isSquare(d) && Number.isInteger(d))
       return (d.toString()); 
  }
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }
  if (multMatch) {
    const x: number = parseInt(multMatch[1]);
    const y: number = parseInt(multMatch[2]);
    return (x+y).toString();
  }
  if (minusMatch) {
    const x: number = parseInt(minusMatch[1]);
    const y: number = parseInt(minusMatch[2]);
    return (x-y).toString();
  }
  else if (query.toLowerCase().includes("what is your name")) {
    return (
      "My name is Swati"
    ); 
  }
  else if (query.toLowerCase().includes("andrew")){
    return (
      "Andrew ID is your cmu ID"
    );
  }
  else if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    ); 
  }
  return "";
}
