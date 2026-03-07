import React, { useEffect, useState } from 'react';
import Header from '../Header';
import RightAside from '../homeLayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router';

const NewsDetails = () => {

    const datas = useLoaderData();
    const { id } = useParams();

    console.log(datas, id)

    const [news, setNews] = useState({})
    
    useEffect(() => {
        const found = datas.find((data) => data.id === id);
        setNews(found)
        
    }, [datas, id])
    
    console.log(news);
    return (
        <div>
            <header className='my-8'>
                <Header></Header>
            </header>

            <main className='w-11/12 mx-auto grid sm:grid-cols-12 gap-8'>
                <section className='sm:col-span-9 *:py-4'>
                    <h1 className='font-bold'>News Details</h1>
                    <img className='w-full min-h-87.5 object-cover ' src={news.image_url} alt="" />
                    <h1 className='font-semibold text-2xl'>{news.title}</h1>
                    <h2>{news.details}</h2>
                    <Link to={`/categories/${news.category_id}`} className='btn btn-secondary'><IoMdArrowRoundBack /> Return to category</Link>
                </section>
                <aside className='sm:col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>

        </div>
    );
};

export default NewsDetails;