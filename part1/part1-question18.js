let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

for(let i in statistics) {
    key = `${i}`;
    value = `${statistics[i]}`;
    if( key.charAt(0) === "r" || value % 2 == 1) {
        console.log(`${statistics[i]}` );
    }
    
}