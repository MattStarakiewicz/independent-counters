var Counter1 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {className: 'counterBox2'},
            React.createElement('span', {}, 'Licznik ' + this.state.counter + ' '),
            React.createElement('button', {id: 'in-btn', type: 'button', onClick: this.increment}, "Dodaj" + ' '),
            React.createElement('button', {id: 'dec-btn', type: 'button', onClick: this.decrement}, "Odejmij" + ' ')
        );
    }
});

var element1 = React.createElement(Counter1);
ReactDOM.render(element1, document.getElementById('app'));

var Counter2 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {className: 'counterBox2'},
            React.createElement('span', {}, 'Licznik ' + this.state.counter + ' '),
            React.createElement('button', {id: 'in-btn', type: 'button', onClick: this.increment}, "Dodaj" + ' '),
            React.createElement('button', {id: 'dec-btn', type: 'button', onClick: this.decrement}, "Odejmij" + ' ')
        );
    }
});

var element2 = React.createElement(Counter2);
ReactDOM.render(element2, document.getElementById('app2'));