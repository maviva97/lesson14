function suma(a, b, c) {
    const ss = a + b + c;
    const radical = Math.sqrt(ss);
    return radical;
  }
  
  const rezultat = suma(5, 9, 2);
  
  console.log(`Radicalul sumei lui 5, 9 si 2 este: ${rezultat}`); //pct1
  /////////////////////////////////
  function literaAleatorie(sir) {
    const indexAleator = Math.floor(Math.random() * sir.length);
    return sir[indexAleator];
  }  
  const sir = "One moment one opportunity";
  
  // de fiecare data diferit o sa deie
  const litera1 = literaAleatorie(sir);
  const litera2 = literaAleatorie(sir);
  const litera3 = literaAleatorie(sir);
  
  console.log(`Litere aleatorii din "${sir}": ${litera1}, ${litera2}, ${litera3}`);//Pct2
  //////////////////////////////
  function concatenare(sir1, sir2) {
    return sir1 + sir2;
  }
  
  const sir1 = "One moment";
  const sir2 = " one opportunity";
  
  const sirConcat = concatenare(sir1, sir2);
  
  console.log(`Concatenare de stringuri: "${sirConcat}"`); //Pct3