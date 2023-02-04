import React, { useEffect, useState } from 'react'
import Featured from '../components/Featured';
import Navbar from '../components/Navbar';
import classes from "../styles/Home.module.scss";
import axios from 'axios';
import Stack from '../components/Stack';

function Home() {
    const [news, setNews] = useState()
    async function FetchNews() {
        try {
            const API="7d045196fee24b95a22a28090faaab39"
            const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API}`);
            if (data) {
                setNews(data.articles)
            }
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        FetchNews()
    }, [])
    return (
        <main className={classes.Parent}>
            <div className={classes.Child}>
                <section>
                    <Navbar />
                </section>
                <section className={classes.Featured}>
                    <h2>Featured Articles !</h2>
                    <Featured articles={news} />
                </section>
                <section >
                    <h2>Article Terbaru!</h2>
                    <Stack articles={news} />
                </section>
            </div>
        </main>
    )
}

export default Home