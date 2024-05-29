const api_url_czk = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=czk";
async function getapi() {
  const response = await fetch(api_url_czk);
  var data = await response.json();
  //console.log(data);
  if (response) {
    show_czk(data);
  }
}
getapi();

function show_czk(data) {
  satsperczk = (1 / data.bitcoin.czk * 100000000).toFixed(0); // 0 decimals
  czkpersats = (data.bitcoin.czk / 100000000).toFixed(0);
  h2 = document.createElement("h2");
  h2.className = "price";
  if (czkpersats >= 1) //běží teď
  {
    mena = "korun";
    if (czkpersats == 1)
      mena = "koruna";
    else if (czkpersats < 5)
      mena = "koruny";
    h2.innerHTML = `<i><span>${czkpersats} ${mena} za <a class="satColor">satoshi</a></span></i>`;
  }
  else // pokud je sat více než koruna
  {
    h2.innerHTML = `<i><span>${satsperczk} <a class="satColor">satoshi</a> za korunu</span></i>`;
  }
  div = document.getElementById("satoshidiv");
  before = document.getElementById("satoshi");
  div.insertBefore(h2, before);
  img.height = 25;
  h2.insertBefore(img, h2.firstChild);
}