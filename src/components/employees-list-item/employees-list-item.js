import { Component } from 'react';

import './employees-list-item.css';
import classnames from 'classnames';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increse: false,
            star: false
        }
    }

    onIncrease = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        }))
    }

    addStar = () => {
        this.setState(({ star }) => ({
            star: !star
        }))
    }

    render() {
        const { name, salary } = this.props;
        const { increase } = this.state;
        const { star } = this.state;

        return (
            <li className={classnames('list-group-item d-flex justify-content-between', { 'increase': increase, 'like': star })}>
                <span onClick={this.addStar} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;