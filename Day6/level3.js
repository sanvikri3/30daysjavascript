    //ques 1
    const countries = [
        'Afghanistan',
        'Albania',
        'Algeria',
        'Andorra',
        'Angola',
        'Antigua and Barbuda',
        'Argentina',
        'Armenia',
        'Australia',
    ]
    Object.freeze(countries);
  
    //ques 2
    const countrie = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
    const clone = [...countries];
  const sortedCountries = clone.sort();
  console.log(countries);
  console.log(sortedCountries);

  //ques 3
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
    ]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

webTechs.sort();
mernStack.sort();
console.log(webTechs);
console.log(mernStack);

//ques 4
const countries2 = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas']
    const arr_land = []
for(let i=0; i<countries.length; i++){
    if(countries[i].includes('land')){
        arr_land.push(countries[i]);
    }
}
console.log(arr_land);