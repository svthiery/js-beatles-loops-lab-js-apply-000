const theBeatlesPlay = (musicians, instruments) => {
  const newArr = [];
  for(let i = 0; i <= musicians.length-1; i++){
    let string = `${musicians[i]} plays ${instruments[i]}`
    newArr.push(string)
  }
  return newArr;
}

