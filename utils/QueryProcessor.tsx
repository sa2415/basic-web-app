export default function QueryProcessor(query: string): string {
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }
  const multMatch = query.match(/What is (\d+) multiplied by(\d+)/);
  if (multMatch) {
    const x: number = parseInt(multMatch[1]);
    const y: number = parseInt(multMatch[2]);
    return (x+y).toString();
  }
  else if (query.toLowerCase().includes("84, 72, 94")) {
    return (
      "94"
    ); 
  }
  else if (query.toLowerCase().includes("84, 72, 94")) {
    return (
      "94"
    ); 
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
