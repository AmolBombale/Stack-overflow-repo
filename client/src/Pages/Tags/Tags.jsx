import React from "react";
import LeftSidebar from "../../component/LeftSidebar/LeftSidebar"
import TagList from "./TagsList";
import './Tags.css'

const Tags = () => {

    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "for questions regarding programing in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question;"
    },{
        id: 2,
        tagName: "python",
        tagDesc: "Python is multi-paradigm dynamically typed. multipurpose programing language. it is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."
    },{
        id: 3,
        tagName: "C#",
        tagDesc: "C# (pronounced 'see sharp') is a high-level, statically typed , multi-paradigm programing language developed by Microsoft."
    },{
        id: 4,
        tagName: "Java",
        tagDesc: " Java is high-level object oriented programing laguage. Use this tag when you're having problems using or understanding the language itself"
    },{
        id: 5,
        tagName: "php",
        tagDesc: " PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally designed for server-side web development."
    },{
        id: 6,
        tagName: "html",
        tagDesc: "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content."
    },{
        id: 7,
        tagName: "android",
        tagDesc: "Android is Google's mobile operating system, used for programing or developing digital devices (smartphones, tablets, Automobiles, TVs, Wear, Glass, IoT."
    },{
        id: 8,
        tagName: "css",
        tagDesc: "CSS is representation style sheet language used for describing the look and formatting of HTML, XML document and SVG elements including colors, layout, fonts, and animations."
    },{
        id: 9,
        tagName: "Reactjs",
        tagDesc: "React is javascript library for building user interfaces. it uses a declarative, component-based paradigm and aims to be both efficient and flexible."
    },{
        id: 10,
        tagName: "node.js",
        tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 javascript engine and libuv liberary."
    }]
    return (
        <div className="home-container-1">
            <LeftSidebar/>
            <div className="home-container-2">
                <h1 className="tags-h1">Tags</h1>
                <p className="tags-p">A tag is a keyword or label that categorizes your question with other, similar question.</p>
                <p className="tags-p">Using the right tags makes it easier for others to find and answer your question.</p>
                <div className="tags-list-container">
                    {
                         tagsList.map((tag) => (
                            <TagList tag={tag} key={tagsList.id}/>
                         ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Tags;