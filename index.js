const theBeatlesPlay = (musicians, instruments) => {
  const newArr = [];
  const musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
  const instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];
  for(let i = 0; i <= musicians.length-1; i++){
    let string = `${musicians[i]} plays ${instruments[i]}`
    newArr.push(string)
  }
  return newArr;
}

