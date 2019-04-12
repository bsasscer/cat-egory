import React from 'react';

export class CatList extends React.Component {
    getCats() {
        let result = [];
        if (
            this.props.activeCategory !== '' &&
            this.props.activeCategory !== null
        ) {
            let cat = this.props.categories.find(
                item => item.name === this.props.activeCategory
            );
            result = cat.values;
        }
        return result;
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-8 category-frame">
                    <div className="row">
                        <div className="col-6 py-3">
                            <h3>
                                {this.props.activeCategory ||
                                    'Select a category'}
                            </h3>
                        </div>
                        <div className="col-6 py-3 text-right">
                            <h3>{this.getCats().length}</h3>
                        </div>
                    </div>
                    <div className="cat-container">
                        <div className="row">
                            <div className="inner-catlist mx-auto d-flex flex-wrap outer-catlist justify-content-between">
                                {this.getCats().map(item => (
                                    <div
                                        key={item}
                                        className="col mb-2 cat-item"
                                    >
                                        <img
                                            src={item}
                                            alt="Awesome cat"
                                            className="catlist-img"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
