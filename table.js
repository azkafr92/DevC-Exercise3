planet = [
    {
      Name: "Alderaan",
      "Rotation Period": "24",
      "Orbital  Period": "364",
      diameter: "12500",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grasslands, mountains",
      "Surface Water": "40",
      population: "2000000000",
      },
    {
      name: "Yavin IV",
      "Rotation Period": "24",
      "Orbital  Period": "4818",
      diameter: "10200",
      climate: "temperate, tropical",
      gravity: "1 standard",
      terrain: "jungle, rainforests",
      "Surface Water": "8",
      population: "1000",
      },
    {
      name: "Hoth",
      "Rotation Period": "23",
      "Orbital  Period": "549",
      diameter: "7200",
      climate: "frozen",
      gravity: "1.1 standard",
      terrain: "tundra, ice caves, mountain ranges",
      "Surface Water": "100",
      population: "unknown",
      },
    {
      name: "Dagobah",
      "Rotation Period": "23",
      "Orbital  Period": "341",
      diameter: "8900",
      climate: "murky",
      gravity: "N/A",
      terrain: "swamp, jungles",
      "Surface Water": "8",
      population: "unknown",
      },
    {
      name: "Bespin",
      "Rotation Period": "12",
      "Orbital  Period": "5110",
      diameter: "118000",
      climate: "temperate",
      gravity: "1.5 (surface), 1 standard (Cloud City)",
      terrain: "gas giant",
      "Surface Water": "0",
      population: "6000000",
      },
    {
      name: "Endor",
      "Rotation Period": "18",
      "Orbital  Period": "402",
      diameter: "4900",
      climate: "temperate",
      gravity: "0.85 standard",
      terrain: "forests, mountains, lakes",
      "Surface Water": "8",
      population: "30000000",
      },
    {
      name: "Naboo",
      "Rotation Period": "26",
      "Orbital  Period": "312",
      diameter: "12120",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grassy hills, swamps, forests, mountains",
      "Surface Water": "12",
      population: "4500000000",
      },
    {
      name: "Coruscant",
      "Rotation Period": "24",
      "Orbital  Period": "368",
      diameter: "12240",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "cityscape, mountains",
      "Surface Water": "unknown",
      population: "1000000000000",
      },
    {
      name: "Kamino",
      "Rotation Period": "27",
      "Orbital  Period": "463",
      diameter: "19720",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "ocean",
      "Surface Water": "100",
      population: "1000000000",
      },
    {
      name: "Geonosis",
      "Rotation Period": "30",
      "Orbital  Period": "256",
      diameter: "11370",
      climate: "temperate, arid",
      gravity: "0.9 standard",
      terrain: "rock, desert, mountain, barren",
      "Surface Water": "5",
      population: "100000000000",
      }
  ];


function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
      }
  }

  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("table");
  let data = Object.keys(planet[0]);
  generateTable(table, planet);
  generateTableHead(table);
  