import React, { useState, useEffect } from 'react'
import classes from "../styles/Stack.module.scss";

function Stack(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        if (props.articles) {
            setData(props.articles.slice(5))
            // console.log(data)
        }
        // eslint-disable-next-line
    }, [props.articles])
    return (
        <div className={classes.Stack}>
            {data.length > 1 && data.map((vals) => {
                return (
                    <div className={classes.Card}>
                        <img src={vals.urlToImage} alt={vals.title} />
                            <h6>{vals.publishedAt.slice(0,10)}</h6>
                            <h2>{vals.title.slice(0,70)+".."}</h2>
                            <p dangerouslySetInnerHTML={{ __html: vals.description }}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Stack