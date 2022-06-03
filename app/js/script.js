const chooseScrollTop = document.querySelector('.choose__scroll-top');
const chooseScrollBottom = document.querySelector('.choose__scroll-bottom');
const chooseItems = document.querySelector('.choose__items');

function hideChooseItem() {
    const items = document.querySelectorAll(`.choose__item`);

    items.forEach(elem => {
        elem.classList.add('_hidden');
    })
}

function showChooseItem(item, itemLenght) {
    let showItemTop = document.querySelector(`.choose__item:nth-child(${item-1})`);
    let showItemActived = document.querySelector(`.choose__item:nth-child(${item})`);
    let showItemBottom = document.querySelector(`.choose__item:nth-child(${item+1})`);

    if (item <= 1) {
        showItemActived = document.querySelector(`.choose__item:nth-child(${item})`);
        showItemTop = document.querySelector(`.choose__item:nth-child(${item+1})`);
        showItemBottom = document.querySelector(`.choose__item:nth-child(${item+2})`);
    }

    if (item >= itemLenght) {
        showItemTop = document.querySelector(`.choose__item:nth-child(${item-2})`);
        showItemBottom = document.querySelector(`.choose__item:nth-child(${item-1})`);
        showItemActived = document.querySelector(`.choose__item:nth-child(${item})`);
    }

    if (showItemActived) {
        showItemActived.classList.remove('_hidden');
        showItemActived.classList.add('_active');
    }

    showItemTop.classList.remove('_hidden');

    if (showItemTop.classList.contains('_active')) {
        showItemTop.classList.remove('_active');
    }

    showItemBottom.classList.remove('_hidden');

    if (showItemBottom.classList.contains('_active')) {
        showItemBottom.classList.remove('_active');
    }
}

if (chooseScrollTop) {
    let item = 2;
    const itemLenght = document.querySelectorAll('.choose__item').length

    hideChooseItem();
    showChooseItem(item, itemLenght);

    chooseScrollTop.addEventListener('click', e => {
        item--;

        if (item < 1) {
            item = 1;
        }

        hideChooseItem();
        showChooseItem(item, itemLenght);
    })

    chooseScrollBottom.addEventListener('click', e => {
        item++;

        if (itemLenght < item) {
            item = itemLenght;
        }

        hideChooseItem();
        showChooseItem(item, itemLenght);
    })
}

const bayingBubble = document.querySelectorAll('.baying__bubble');

if (bayingBubble) {
    bayingBubble.forEach(elem => {
        // if (elem.classList.contains('_animation')) {
        //     elem.remove('_animation');
        // }

        elem.addEventListener('click', e => {
            elem.classList.add('_animation');

            setTimeout(() => {
                elem.classList.remove('_animation');
            }, 2500);
        })
    })
}