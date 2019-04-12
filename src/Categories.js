import React from 'react';

export class Categories extends React.Component {
    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-8 category-frame bg-light">
                        <ul>
                            {this.props.categories.map(item => (
                                <li
                                    key={item.name}
                                    onClick={() =>
                                        this.props.selectCategory(item.name)
                                    }
                                >
                                    <button className="btn btn-link">
                                        {item.name}
                                    </button>
                                    <span className="category-count">
                                        {item.values.length}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
