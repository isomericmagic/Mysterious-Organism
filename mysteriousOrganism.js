// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return { 
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let newDnaBases = ['A', 'T', 'C', 'G']
      let indexToMutate = Math.floor(Math.random() * 14);
      let indexToRemove = newDnaBases.indexOf(dna[indexToMutate]);
      newDnaBases.splice(indexToRemove, 1);
      newBase = newDnaBases[[Math.floor(Math.random() * 3)] ];
      dna[indexToMutate] = newBase;
      return dna;
    }, 
    compareDNA(pAequor) {
      let commonDna = [];
      for (let i = 0; i < dna.length; i++) {
        if (dna[i] === pAequor.dna[i]) {
          commonDna.push(dna[i]);
        }
      }
      let finalPercentage = ((commonDna.length / dna.length) * 100).toFixed(0);
      console.log(`Specimen #1 and specimen #2 have ${finalPercentage}% DNA in common.`);
    },
    willLikelySurvive() {
      //count of 9 or greater
      let count = 0;
      for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'C' || dna[i] === 'G') {
          count += 1;
        }
      }
      if (count >= 9) {
        return true;
      } else {
        return false;
      }
    }
  }
};

let survivorArray = [];
for (let i = 1; survivorArray.length < 30; i++) {
  const specimenName = pAequorFactory(i, mockUpStrand());
  if (specimenName.willLikelySurvive()) {
    survivorArray.push(specimenName);  
  }
}

console.log(survivorArray[29].dna);
console.log(survivorArray[29].mutate());
console.log(survivorArray[0].dna);
survivorArray[29].compareDNA(survivorArray[0]);