(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(47)},24:function(e,t,a){},27:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),s=a.n(r),o=(a(24),a(3)),i=a(4),l=a(6),m=a(5),u=a(7),h=a(2),g=a(8),v=a.n(g),d=(a(27),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCat()}},{key:"handleSave",value:function(){var e=document.getElementById("category-input").value;if(""===e)alert("Please enter a category name");else{var t=e.toLowerCase();this.props.saveCat(t)}}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-8 mx-auto img-holder"},c.a.createElement("img",{src:this.props.randomCat,className:"img-fluid mx-auto d-block img-holder-inner",alt:"Random cat"}))),c.a.createElement("div",{className:"row py-2 justify-content-center"},c.a.createElement("div",{className:"col-8 mx-auto"},c.a.createElement("button",{onClick:this.props.fetchCat,className:"btn btn-outline-primary btn-large float-right"},"Next"))),c.a.createElement("div",{className:"row py-2"},c.a.createElement("div",{className:"col-8 mx-auto justify-content-space-between"},c.a.createElement("input",{type:"text",className:"form-control",id:"category-input",placeholder:"Enter category name"}),c.a.createElement("button",{type:"button",onClick:this.handleSave.bind(this),className:"btn btn-outline-primary btn-large float-right"},"Save"))),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-8 mx-auto"},c.a.createElement("button",{onClick:this.props.resetCats,className:"btn btn-outline-light btn-sm float-right"},"Reset"))))}}]),t}(c.a.Component)),C=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-8 category-frame bg-light"},c.a.createElement("ul",null,this.props.categories.map(function(t){return c.a.createElement("li",{key:t.name,onClick:function(){return e.props.selectCategory(t.name)}},c.a.createElement("button",{className:"btn btn-link"},t.name),c.a.createElement("span",{className:"category-count"},t.values.length))})))))}}]),t}(c.a.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getCats",value:function(){var e=this,t=[];""!==this.props.activeCategory&&null!==this.props.activeCategory&&(t=this.props.categories.find(function(t){return t.name===e.props.activeCategory}).values);return t}},{key:"render",value:function(){return c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-8 category-frame"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6 py-3"},c.a.createElement("h3",null,this.props.activeCategory||"Select a category")),c.a.createElement("div",{className:"col-6 py-3 text-right"},c.a.createElement("h3",null,this.getCats().length))),c.a.createElement("div",{className:"cat-container"},c.a.createElement("div",{className:"row mx-auto outer-catlist"},c.a.createElement("div",{className:"inner-catlist d-flex flex-wrap flex-sm-column justify-content-between"},this.getCats().map(function(e){return c.a.createElement("div",{key:e,className:"col cat-item"},c.a.createElement("img",{src:e,alt:"Awesome cat",className:"catlist-img"}))}))))))}}]),t}(c.a.Component),y=a(18),f=a.n(y);var b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={randomCat:"",categories:[],activeCategory:""},a.fetchCat=a.fetchCat.bind(Object(h.a)(Object(h.a)(a))),a.saveCat=a.saveCat.bind(Object(h.a)(Object(h.a)(a))),a.resetCats=a.resetCats.bind(Object(h.a)(Object(h.a)(a))),a.selectCategory=a.selectCategory.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({randomCat:v.a.get("currentCat")||"",categories:v.a.get("savedCategories")||[],activeCategory:v.a.get("selectedCategory")})}},{key:"fetchCat",value:function(){var e=this;f.a.get("http://aws.random.cat/meow").then(function(e){return e}).catch(function(e){return console.error(e),Promise.reject(e)}).then(function(t){e.setState({randomCat:t.data.file})})}},{key:"saveCat",value:function(e){for(var t=this.state.categories,a=!1,n=0;n<t.length;n++)if(t[n].name===e){a=!0,t[n].values.push(this.state.randomCat);break}if(!a){var c={name:e,values:[this.state.randomCat]};t.push(c)}this.setState({categories:t}),v.a.set("savedCategories",t)}},{key:"resetCats",value:function(){this.setState({categories:[],activeCategory:""}),v.a.set("savedCategories",[]),v.a.set("selectedCategory","")}},{key:"selectCategory",value:function(e){console.log(e),this.setState({activeCategory:e}),v.a.set("selectedCategory",e)}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h2",null,"Cat-egory"),c.a.createElement(d,{randomCat:this.state.randomCat,categories:this.state.categories,fetchCat:this.fetchCat,saveCat:this.saveCat,resetCats:this.resetCats}),c.a.createElement(C,{categories:this.state.categories,selectCategory:this.selectCategory}),c.a.createElement(p,{categories:this.state.categories,activeCategory:this.state.activeCategory}))}}]),t}(n.Component);s.a.render(c.a.createElement(b,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9f82f5dd.chunk.js.map