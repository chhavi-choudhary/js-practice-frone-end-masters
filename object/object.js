const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
  };
  tekkenCharacter.origin = 'South Korea';
  tekkenCharacter['hair color'] = 'dyed orange';//bracket notatiom ifvproperty has some space
  const eyes = 'eye color';
    tekkenCharacter[eyes] = 'brown';
  console.log(tekkenCharacter);

const a=[1,3,4,{b:6,c:7},8]
console.log(a[3].c)