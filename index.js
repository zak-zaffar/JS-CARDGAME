const cardObjectDefinitions = [
    {id:1, imagePath: '/images/card-KingHearts.png'},
    {id:2, imagePath: '/images/card-JackClubs.png'},
    {id:3, imagePath: '/images/card-QueenDiamonds.png'},
    {id:4, imagePath: '/images/card-AceSpades.png'},
]

const cardBackImgPath = '/images/card-back-Blue.png'

const cardContainerElem = document.querySelector('.card-container')

createCards()

function createCards(){
    cardObjectDefinitions.forEach((cardItem)=>{
        createCard(cardItem)
    })
}

function createCard(cardItem){

    //div that make up the card
    const cardElem = document.createElement('div');
    const cardInnerElem = document.createElement('div');
    const cardFrontElem = document.createElement('div');
    const cardBackElem = document.createElement('div');

    //front and back images
    const cardFrontImg = document.createElement('img');
    const cardBackImg = document.createElement('img');

    //add class and id to card element
    addClassToElement(cardElem, 'card');
    addIdToElement(cardElem, cardItem.id);

    //add class to card inner element
    addClassToElement(cardInnerElem, 'card-inner');

    //add class to card front element
    addClassToElement(cardFrontElem, 'card-front');

    //add class to card back element
    addClassToElement(cardBackElem, 'card-back');

    //add src attribute to img element - back of card
    addSrcToImageElem(cardBackImg, cardBackImgPath);

    //add src attribute to img element - front of card
    addSrcToImageElem(cardFrontImg, cardItem.imagePath);

    //assign class to back image element - back of card
    addClassToElement(cardBackImg, 'card-img');

    //assign class to front image element - front of card
    addClassToElement(cardFrontImg, 'card-img');

    //add front and back images element as child elements to card element
    addChildElement(cardFrontElem, cardFrontImg);
    addChildElement(cardBackElem, cardBackImg);

    //add card element as child elements to card inner element
    addChildElement(cardInnerElem, cardFrontElem);
    addChildElement(cardInnerElem, cardBackElem);

    //add inner card element as child elements to card element
    addChildElement(cardElem, cardInnerElem);

    // add card element as child elements to appropriate grid cell
    addCardToGridCell(cardElem);

}

function createElement(elemType){
    return document.createElement(elemType);
}

function addClassToElement(elem, className){
    elem.classList.add(className);
}

function addIdToElement(elem, id){
    elem.id = id;
}

function addSrcToImageElem(imgElem, src){
    imgElem.src = src;
}

function addChildElement(parentElem, childElem){
    parentElem.appendChild(childElem);
}

function addCardToGridCell(card)
{
    const cardPositionClassName = mapCardIdToGridCell(card)

    const cardPosElem = document.querySelector(cardPositionClassName);

    addChildElement(cardPosElem, card)
}

function mapCardIdToGridCell(card){
    if(card.id == 1)
    {
        return '.card-pos-a'
    }
    else if(card.id == 2)
    {
        return '.card-pos-b'
    }
    else if(card.id == 3)
    {
        return '.card-pos-c'
    }
    else
    {
        return '.card-pos-d'
    }
}