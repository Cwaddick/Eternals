const etc = [
    {
      name: "Ikaris",
      attributes: ["flight", "super strength", "laser sight", "unarmed combat", "enhanced senses"],
      imgFile: 'ik.png'
      
    },
    {
      name: "Sersi",
      attributes: ["matter manipulation", "telepathy", "stage 1 immortality","transmuatation","enhanced physique"],
      imgFile: 'sersi.png'
      
    },
    {
      name: "Thena",
      attributes: ["combat proficiency", "regeneration", "meta-physique","Weapon generation","Psionic resistance"],
      imgFile: 'Thena.jpg'
      
    },
    {
      name: "Phastos",
      attributes: ["healing factor", "matter manipulation", "cosmic energy manipulation","technomancy","enhanced durability"],
      imgFile: 'phas.jpg'
      
    },
    {
      name: "Druig",
      attributes: ["Telepathy", "mind control", "possession","Longevity", "immortality"],
      imgFile: 'druig.jpg'
      
    }
  ];


 const serch= function(attribute) {
    let indec=etc.find(character => character.attributes.includes(attribute));
    return indec
 }
  
  
  
