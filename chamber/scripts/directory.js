const directoryPath = "data/members.json";

async function getbusinesses(){
  const response= await fetch(directoryPath);
  const data = await response.json();
  /*console.log(data);*/
  displayBusinesses(data.businesses);
}
getbusinesses();

const displayBusinesses = (businesses) => {
      businesses.forEach((business) => {
      let cardContents = document.createElement("div");
      let businessName = document.createElement("h3");
      let businessAddress = document.createElement("p");
      let description = document.createElement("p");
      let businessLogo = document.createElement("img");
      let descWrapper = document.createElement("div");
      let businessLevelOfMembership = document.createElement("p");
      let businessPhone = document.createElement("a");
      let businessEmail = document.createElement("a");
      let businessWebsite = document.createElement("a");
      let div = document.createElement("div");

      businessName.textContent = business.name;
      businessAddress.textContent = business.address;
      description.textContent = business.description;
      businessLevelOfMembership.textContent = "Level: \u0020" + business.level;

      businessPhone.textContent = "\u260E:\u0020" + business.phone;
      businessPhone.href = "tel:" + business.phone;

      businessEmail.textContent = "✉:\u0020" + business.email;
      businessEmail.href = "mailto:" + business.email;

      businessWebsite.textContent = "🔗:\u0020" + business.website;
      businessWebsite.href = business.website;

      businessLogo.setAttribute("src", "images/" + business.logo);
      businessLogo.setAttribute("alt", business.name);

      descWrapper.appendChild(description);
      descWrapper.appendChild(businessLogo);

      div.appendChild(businessName);
      div.appendChild(businessAddress);
      div.appendChild(descWrapper);
      div.appendChild(businessPhone);
      div.appendChild(businessEmail);
      div.appendChild(businessWebsite);
      div.appendChild(businessLevelOfMembership);

      cardContents.appendChild(div);
      cardContents.classList.add("card");

      document.getElementById("businesses").appendChild(cardContents);
    });
  };



// Layout Handler
const gridBtn = document.getElementById("grid-btn");
const listBtn = document.getElementById("list-btn");
const businesses = document.getElementById("businesses");

gridBtn.addEventListener("click", function () {
  businesses.classList.add("grid");
});

listBtn.addEventListener("click", function () {
  businesses.classList.remove("grid");
});
