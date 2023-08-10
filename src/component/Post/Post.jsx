import React from "react";

const Post = (props) => {
    return (
        <div className="post">
        <div className="img-thumb">
            <img src="https://images.unsplash.com/photo-1590476355683-96c1859f4658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFuZHVuZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="api"/>
        </div>
        <div className="content">
            <p className="title">{props.data.title}</p>
            <p className="desc">{props.data.body}</p>
            <button className="update" onClick= {() => props.update(props.data)}>Update</button>
            <button className="remove" onClick= {() => props.remove(props.data.id)}>Remove</button>
        </div>
    </div>
    )
}

export default Post;