/* eslint-disable no-alert */

/**************
 *   SLICE 1
 **************/

function updateCoffeeView(coffeeQty) {
    document.querySelector("#coffee_counter").innerText = coffeeQty;
}

function clickCoffee(data) {
    let coffeeQty = data.coffee += 1;
    updateCoffeeView(coffeeQty);
    renderProducers(data);
}

/**************
 *   SLICE 2
 **************/

function unlockProducers(producers, coffeeCount) {
    return producers.map(prod => {
        if (coffeeCount >= (prod.price / 2)) {
            prod.unlocked = true;
        }
    })
}

function getUnlockedProducers(data) {
    return data.producers.filter(producer => producer.unlocked);
}

function makeDisplayNameFromId(id) {
    return id.split('_').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(" ");
}

// You shouldn't need to edit this function-- its tests should pass once you've written makeDisplayNameFromId
function makeProducerDiv(producer) {
    const containerDiv = document.createElement('div');
    containerDiv.className = 'producer';
    const displayName = makeDisplayNameFromId(producer.id);
    const currentCost = producer.price;
    const html = `
  <div class="producer-column">
    <div class="producer-title">${displayName}</div>
    <button type="button" id="buy_${producer.id}">Buy</button>
    <button type="button" id="sell_${producer.id}">Sell</button>
  </div>
  <div class="producer-column">
    <div>Quantity: ${producer.qty}</div>
    <div>Coffee/second: ${producer.cps}</div>
    <div>Cost: ${currentCost} coffee</div>
    <div>Sell: ${Math.floor(currentCost / 1.2)}</div>
  </div>
  `;
    containerDiv.innerHTML = html;
    return containerDiv;
}

function deleteAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function renderProducers(data) {
    let producerContainer = document.querySelector('#producer_container');
    unlockProducers(data.producers, data.coffee);
    deleteAllChildNodes(producerContainer);
    getUnlockedProducers(data).forEach(prod => producerContainer.appendChild(makeProducerDiv(prod)))
}

/**************
 *   SLICE 3
 **************/

function getProducerById(data, producerId) {
    return data.producers.find(producer => producer.id === producerId);
}

function canAffordProducer(data, producerId) {
    return getProducerById(data, producerId).price <= data.coffee
}

function updateCPSView(cps) {
    document.getElementById('cps').innerText = cps;
}

function updatePrice(oldPrice) {
    return Math.floor((oldPrice * .25) + oldPrice)
}

function attemptToBuyProducer(data, producerId) {
    let coffeeQt = data.coffee;
    const producer = getProducerById(data, producerId);
    if (canAffordProducer(data, producerId)) {
        producer.qty++
        data.coffee = coffeeQt - producer.price
        producer.price = updatePrice(producer.price)
        data.totalCPS += producer.cps
        return true;
    } else {
        return false
    }
}

function buyButtonClick(event, data) {
    if (event.target.tagName === "BUTTON") {
        const targetProducer = event.target.id.slice(4);
        if (attemptToBuyProducer(data, targetProducer)) {
            renderProducers(data);
            updateCoffeeView(data.coffee);
            updateCPSView(data.totalCPS);
        } else {
            window.alert("Not enough coffee!");
        }
    }
}

function tick(data) {
    data.coffee = data.coffee += data.totalCPS;
    updateCoffeeView(data.coffee);
    renderProducers(data);
}

/**************
 *   SLICE 4 - Selling Producer
 **************/
function canSellProducer(data, producerId) {
    return getProducerById(data, producerId).qty > 0;
}

function attemptToSellProducer(data, producerId){
    const producer = getProducerById(data, producerId);
    if (canSellProducer(data, producerId)) {
        producer.qty--
        data.coffee += ( Math.floor(producer.price / 1.2) )
        producer.price = updatePrice(Math.floor(producer.price / 1.2))
        data.totalCPS -= producer.cps
        return true;
    } else {
        return false
    }
}
function sellButtonClick(event, data){
    if (event.target.tagName === "BUTTON") {
        const targetProducer = event.target.id.slice(5);
        if (attemptToSellProducer(data, targetProducer)) {
            renderProducers(data);
            updateCoffeeView(data.coffee);
            updateCPSView(data.totalCPS);
        } else {
            window.alert(`Not enough to sell ${targetProducer}!`);
        }
    }
}

/*************************
 *  Start your engines!
 *************************/

// You don't need to edit any of the code below
// But it is worth reading so you know what it does!

// So far we've just defined some functions; we haven't actually
// called any of them. Now it's time to get things moving.

// We'll begin with a check to see if we're in a web browser; if we're just running this code in node for purposes of testing, we don't want to 'start the engines'.

// How does this check work? Node gives us access to a global variable /// called `process`, but this variable is undefined in the browser. So,
// we can see if we're in node by checking to see if `process` exists.
if (typeof process === 'undefined') {
    // Get starting data from the window object
    // (This comes from data.js)
    const data = window.data;

    // Add an event listener to the giant coffee emoji
    const bigCoffee = document.getElementById('big_coffee');
    bigCoffee.addEventListener('click', () => clickCoffee(data));

    // Add an event listener to the container that holds all of the producers
    // Pass in the browser event and our data object to the event listener
    const producerContainer = document.getElementById('producer_container');
    producerContainer.addEventListener('click', event => {

        if(event.target.id.slice(0,3) === 'buy' ){
            buyButtonClick(event, data);
        } else if(event.target.id.slice(0,4) === 'sell') {
            sellButtonClick(event, data);
        }
    });

    // Call the tick function passing in the data object once per second
    setInterval(() => tick(data), 1000);
}
// Meanwhile, if we aren't in a browser and are instead in node
// we'll need to exports the code written here so we can import and
// Don't worry if it's not clear exactly what's going on here;
// We just need this to run the tests in Mocha.
else if (process) {
    module.exports = {
        updateCoffeeView,
        clickCoffee,
        unlockProducers,
        getUnlockedProducers,
        makeDisplayNameFromId,
        makeProducerDiv,
        deleteAllChildNodes,
        renderProducers,
        updateCPSView,
        getProducerById,
        canAffordProducer,
        updatePrice,
        attemptToBuyProducer,
        buyButtonClick,
        tick
    };
}