//Creates and Displays the correct style for the main display

function changeDiv(divNode, position, top, left, width, height, backgroundColor, verticalAlign, borderRadius ){

    divNode.style.position = position;
    divNode.style.left = top;
    divNode.style.top = left;
    divNode.style.width = width;
    divNode.style.height = height;
    divNode.style.backgroundColor = backgroundColor;
    divNode.style.verticalAlign = verticalAlign;
    divNode.style.borderRadius = borderRadius;

}