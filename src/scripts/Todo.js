let mockData = [{
    id: '1',
    title: 'This is title',
    description: 'This is description 1',
    done: false,
    date: new Date()
}, {
    id: '2',
    title: 'This is second title',
    description: 'This is description 2',
    done: false,
    date: new Date()
}, {
    id: '3',
    title: 'This is third title',
    description: 'This is description 3',
    done: false,
    date: new Date()
}, {
    id: '4',
    title: 'This is forth title',
    description: 'This is description 4',
    done: false,
    date: new Date()
}];

class Todo {

    constructor() {
        let self = this;

        this.list = document.querySelector('.list-items');
        this.render();

        document.querySelector('.js-save_and_close').addEventListener('click', this.insertItem.bind(this));
        document.querySelector('.js-update_and_close').addEventListener('click', this.updateItem.bind(this));

        document.addEventListener('click', event => {
            if (!event.target) {
                return;
            }

            if (event.target.classList.contains('btn-delete')) {
                self.removeItem(event);
            }

            if (event.target.classList.contains('btn-edit')) {
                self.renderEditForm(event);
            }

            if (event.target.classList.contains('btn-complete')) {
                self.setTaskComplete(event);
            }
        });
    }

    render() {
        this.list.innerHTML = '';

        mockData.forEach(item => {
            this.createDomElements(item.id);
            this.li.getElementsByClassName('card-title')[0].insertAdjacentHTML('afterbegin', item.title);
            this.li.getElementsByClassName('card-text')[0].insertAdjacentHTML('afterbegin', item.description);

            if (item.done) {
                this.li.classList.add('todo-done');
            }

            this.list.appendChild(this.li);
        });
    }

    renderEditForm(event) {
        let id = event.target.getAttribute('data-id');

                document.querySelectorAll('.popup-trigger').forEach(trigger => {
            trigger.click();
        });

        // document.querySelector('.edit-popup').classList.remove('hide');
        // document.querySelector('.edit-popup').classList.add('show');
        document.querySelector('.js-update_and_close').setAttribute('data-id', id);

        mockData.forEach(item => {
            if (item.id === id) {
                document.querySelector('.field-title').value = item.title;
                document.querySelector('.field-description').value = item.description;
            }
        });
    }

    createDomElements(id) {
        this.li = document.createElement('div');
        this.li.className = "col-md-4 mb-2";
        this.li.innerHTML = document.getElementById('blockOfStuff').innerHTML;

        this.edit = document.createElement('button');
        this.delete = document.createElement('button');
        this.complete = document.createElement('button');

        this.edit.classList.add('btn-edit', 'btn', 'btn-secondary');
        this.delete.classList.add('btn-delete', 'btn', 'btn-secondary');
        this.complete.classList.add('btn-complete', 'btn', 'btn-secondary');

        this.delete.setAttribute('data-id', id);
        this.edit.setAttribute('data-id', id);
        this.complete.setAttribute('data-id', id);

        this.edit.innerHTML = 'Edit';
        this.delete.innerHTML = 'Delete';
        this.complete.innerHTML = 'Complete';
        
        this.li.appendChild(this.delete);
        this.li.appendChild(this.edit);
        this.li.appendChild(this.complete);
    }

    insertItem() {
        let todoTitle = document.querySelector('.field-title').value;
        let todoDescription = document.querySelector('.field-description').value;

        let newItem = {
            id: Date.now().toString(),
            title: todoTitle,
            description: todoDescription,
            done: false,
            date: new Date()
        };

        mockData.push(newItem);

        //   document.querySelector('.item').value = '';
        this.render();
    }

    removeItem(event) {
        let id = event.target.getAttribute('data-id');

        mockData = mockData.filter(item => {
            if (item.id !== id) {
                return item;
            }
        });

        this.render();
    }

    updateItem(event) {
        let id = event.target.getAttribute('data-id');
        let todoTitle = document.querySelector('.field-title').value;
        let todoDescription = document.querySelector('.field-description').value;

        mockData = mockData.map(item => {
            if (item.id === id) {
                item['title'] = todoTitle;
                item['description'] = todoDescription;
            }

            return item;
        });

        this.render();
    }

    setTaskComplete(event) {
        let id = event.target.getAttribute('data-id');

        mockData = mockData.map(item => {
            if (item.id === id) {
                item['done'] = true;
            }

            return item;
        });

        this.render();
    }
}

export default Todo;