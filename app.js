const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover) // когда элемент находится над placeholder куда мы можем его поместить
    placeholder.addEventListener('dragenter', dragenter) // когда заходим на ерритторию конкретного placeholder
    placeholder.addEventListener('dragleave', dragleave) //перетащили, но вышли
    placeholder.addEventListener('drop', dragdrop) // когда отпустили
}

function dragstart(event) {
    console.log('drag start')
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)

}

function dragend(event) {
    console.log('drag end')
    event.target.className = 'item'
}

function dragover(event) {
    event.preventDefault();

    console.log('drag over');
}

function dragenter(event) {
    event.target.classList.add('hovered')
    console.log('drag enter');
}

function dragleave(event) {
    event.target.classList.remove('hovered')
    console.log('drag leave');
}

function dragdrop(event) {
event.target.classList.remove('hovered')
    event.target.append(item)
        console.log('drag drop');
}