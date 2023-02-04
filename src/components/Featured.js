import React, { useEffect, useState } from 'react'
import classes from "../styles/Featured.module.scss";

function Featured(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        if (props.articles) {
            setData(props.articles.slice(0, 4))
        }
        // eslint-disable-next-line
    }, [props.articles])
    // console.log(data)
    return (
        <section className={classes.Container}>
            <div className={classes.Featured}>
                {data.length > 1 && data ?
                    (
                        <>
                            <img src={data[0].urlToImage} alt={data[0].title} />
                            <h6>{data[0].publishedAt.slice(0,10)}</h6>
                            <h2>{data[0].title}</h2>
                            <p dangerouslySetInnerHTML={{ __html: data[0].description }}/>
                        </>
                    ) : null
                }
            </div>
            <div className={classes.Sidemount}>
                {data.length > 1 && data.slice(1,4).map((val)=>{
                    return (
                        <>
                            <div className={classes.Cards}>
                                <div className={classes.Img}>
                                    <img src={val.urlToImage} alt={val.title}/>
                                </div>
                                <div className={classes.TextDiv}>
                                    <h6>{val.publishedAt.slice(0,10)}</h6>
                                    <h2>{val.title}</h2>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </section>
    )
}

export default Featured