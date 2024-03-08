const baseUrl= "https://byuio-oap.github.io/wdd230/";
const linksURL="https://byuio-oap.github.io/wdd230/data/links.json";
const ullinks=document.querySelector('#ulcards');



async function getlinks(){
    const response= await fetch(linksURL);
    const data = await response.json();
    /*console.log(data);*/
    displayLinks(data.lessons);
}
getlinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let unOrderedList = document.createElement('ul');
        let lessonHeader = document.createElement('span');
        lessonHeader.textContent = week.lesson;

        let listItem = document.createElement('li');

        week.links.forEach((link, index) => {
            let linkAnchor = document.createElement('a');
            linkAnchor.href = link.url;
            linkAnchor.textContent = link.title;

            listItem.appendChild(linkAnchor);

            // Add a separator (|) if it's not the last link in the array
            if (index < week.links.length - 1) {
                let separator = document.createTextNode(' | ');
                listItem.appendChild(separator);
            }
        });

        unOrderedList.appendChild(lessonHeader);
        unOrderedList.appendChild(listItem);
        ullinks.appendChild(unOrderedList);
    });
}

