
const directoryPath = "data/members.json";
async function getbusinesses() {
  
    const response = await fetch(directoryPath);
    const data = await response.json();

    const filteredBusinesses = data.businesses.filter(business => business.level === "Silver" || business.level === "Gold");

    const shuffledBusinesses = shuffleArray(filteredBusinesses);

    const selectedBusinesses = shuffledBusinesses.slice(0, 3);

    displayBusinesses(selectedBusinesses);
  
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function displayBusinesses(businesses) {
  const businessesContainer = document.getElementById("hbusinesses");

  businesses.forEach(business => {
    const cardContents = document.createElement("div");
    cardContents.classList.add("card");

    const businessName = document.createElement("h2");
    businessName.textContent = business.name;

    let businessAddress = document.createElement("h3");
    businessAddress.textContent = business.address;

    const businessDescription = document.createElement("p");
    businessDescription.textContent = business.description;

    const businessLogo = document.createElement("img");
    businessLogo.setAttribute("src", "images/" + business.logo);
    businessLogo.setAttribute("alt", business.name);

    let businessLevelOfMembership = document.createElement("h4");
    businessLevelOfMembership.textContent = "Level: \u0020" + business.level;

    cardContents.appendChild(businessName);
    cardContents.appendChild(businessAddress);
    cardContents.appendChild(businessDescription);
    cardContents.appendChild(businessLogo);
    cardContents.appendChild(businessLevelOfMembership)

    businessesContainer.appendChild(cardContents);
  });
}

getbusinesses();
