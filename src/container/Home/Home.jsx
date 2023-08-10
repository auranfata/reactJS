import React, {Component} from "react";
// import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
// import Product from "../Product/Product";
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";

class Home extends Component {
    state = {
        showComponent: true
    }
    componentDidMount() {
        setTimeout(()=> {
        this.setState({
            showComponent: false
        })
    }, 15000)
    }

    render(){

        return (
            <div>
            {/* <p>Youtube Component</p>
            <hr/>
            <YoutubeComp 
            time = "7.12" 
            title = "Tutorial React JS - Bagian 1" 
            desc = "20.000x ditonton. 30 hari yang lalu"/>
            <YoutubeComp 
            time = "8.30"
            title = "Tutorial React JS - Bagian 2" 
            desc = "10.000x ditonton. 14 hari yang lalu"/>
            <YoutubeComp 
            time = "9.10" 
            title = "Tutorial React JS - Bagian 3" 
            desc = "204x ditonton. 1 jam yang lalu"/>
            <YoutubeComp 
            time = "8.00" 
            title = "Tutorial React JS - Bagian 4" 
            desc = "5000x ditonton. 5 hari yang lalu"/>
            <YoutubeComp />
            <p>Counter</p>
            <hr/>
            <Product />
            <p>LifeCycle Component</p>
            <hr/>
            {
                this.state.showComponent
                ?
                <LifeCycleComp />: null
            } */}
            <p>Blog Post</p>
            <hr/>
            <BlogPost />
            </div>
        )
    }
}

export default Home;