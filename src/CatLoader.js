import React from 'react';

export class CatLoader extends React.Component {
    componentDidMount() {
        this.props.fetchCat();
    }

    handleSave() {
        let val = document.getElementById('category-input').value;
        if (val === '') {
            alert('Please enter a category name');
        } else {
            let temp = val.toLowerCase();
            this.props.saveCat(temp);
        }
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-8 mx-auto img-holder">
                        <img
                            src={this.props.randomCat}
                            className="img-fluid mx-auto d-block img-holder-inner"
                            alt="Random cat"
                        />
                    </div>
                </div>
                <div className="row py-2 justify-content-center">
                    <div className="col-8 mx-auto">
                        <button
                            onClick={this.props.fetchCat}
                            className="btn btn-outline-primary btn-large float-right"
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div className="row py-2">
                    <div className="col-8 mx-auto justify-content-space-between">
                        <input
                            type="text"
                            className="form-control"
                            id="category-input"
                            placeholder="Enter category name"
                        />
                        <button
                            type="button"
                            onClick={this.handleSave.bind(this)}
                            className="btn btn-outline-primary btn-large float-right"
                        >
                            Save
                        </button>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8 mx-auto">
                        <button
                            onClick={this.props.resetCats}
                            className="btn btn-outline-light btn-sm float-right"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
