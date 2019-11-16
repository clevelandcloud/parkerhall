import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Powered', 'by', 'ClevelandCloud'], ' ');

    return element;
}

document.body.appendChild(component());