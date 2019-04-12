import React, { Component } from 'react';
import ls from 'local-storage';
import './App.css';
import { CatLoader } from './CatLoader';
import { Categories } from './Categories';
import { CatList } from './CatList';
import { fetchRandomCat } from './catApi';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomCat: '',
            categories: [],
            activeCategory: ''
        };
        this.fetchCat = this.fetchCat.bind(this);
        this.saveCat = this.saveCat.bind(this);
        this.resetCats = this.resetCats.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
    }

    componentDidMount() {
        this.setState({
            randomCat: ls.get('currentCat') || '',
            categories: ls.get('savedCategories') || [],
            activeCategory: ls.get('selectedCategory')
        });
    }

    fetchCat() {
        fetchRandomCat().then(result => {
            this.setState({
                randomCat: result.data.file
            });
        });
    }

    saveCat(categoryName) {
        let temp = this.state.categories;
        let found = false;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i].name === categoryName) {
                found = true;
                temp[i].values.push(this.state.randomCat);
                break;
            }
        }
        if (!found) {
            const newCat = {
                name: categoryName,
                values: [this.state.randomCat]
            };
            temp.push(newCat);
        }
        this.setState({
            categories: temp
        });
        ls.set('savedCategories', temp);
    }

    resetCats() {
        this.setState({
            categories: [],
            activeCategory: ''
        });
        ls.set('savedCategories', []);
        ls.set('selectedCategory', '');
    }

    selectCategory(categoryName) {
        console.log(categoryName);
        this.setState({
            activeCategory: categoryName
        });
        ls.set('selectedCategory', categoryName);
    }

    render() {
        return (
            <div className="container">
                <h2>Cat-egory</h2>
                <CatLoader
                    randomCat={this.state.randomCat}
                    categories={this.state.categories}
                    fetchCat={this.fetchCat}
                    saveCat={this.saveCat}
                    resetCats={this.resetCats}
                />
                <Categories
                    categories={this.state.categories}
                    selectCategory={this.selectCategory}
                />
                <CatList
                    categories={this.state.categories}
                    activeCategory={this.state.activeCategory}
                />
            </div>
        );
    }
}

export default App;
