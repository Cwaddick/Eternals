const etc = [
    {
      name: "Ikaris",
      attributes: ["flight", "super strength", "laser sight", "unarmed combat", "enhanced senses"],
      imgFile: 'ik.png'
      
    },
    {
      name: "Sersi",
      attributes: ["matter manipulation", "telepathy", "stage 1 immortality","transmuatation","enhanced physique"],
      
    },
    {
      name: "Thena",
      attributes: ["combat proficiency", "regeneration", "meta-physique","Weapon generation","Psionic resistance"],
      
    },
    {
      name: "Phastos",
      attributes: ["healing factor", "matter manipulation", "cosmic energy manipulation","technomancy","enhanced durability"],
      
    },
    {
      name: "Druig",
      attributes: ["Telepathy", "mind control", "possession","Longevity", "immortality"],
      
    }
  ];


  function serch(attribute) {
    let indec=etc.find(character => character.attributes.includes(attribute));
    return indec
    
  }
  
  
  let ask1 = document.getElementsByName("Character");
  let ask=ask1.value
  const yes = serch(ask);
  
  if (yes) {
    console.log("The character(s) with the attribute ",ask," is:",yes);
  
  } else {
    console.log("No character found with the attribute", ask);
  }
