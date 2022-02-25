const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(data => displayBuddy(data.results))
}
loadBuddy()

const displayBuddy = buddy => {
    const buddyContainer = document.getElementById('buddy');
    buddy.forEach(el => {
        console.log(el)
        const div = document.createElement('div');
        div.classList.add('person')
        div.innerHTML = `
        <h4>Name: ${el.name.title} ${el.name.first} ${el.name.last}</h4>
        <p>Email: ${el.email}</p>
        <p>Phone: ${el.phone}</p>
        `
        buddyContainer.appendChild(div)
    });

}