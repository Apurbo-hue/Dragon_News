import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([])

    useEffect(() => {

        if (id == "0") {
            setCategoryNews(data)
        }
        else if (id == "1") {
            const filteredArray = data.filter(item => item.others?.is_today_pick == true)
            setCategoryNews(filteredArray)
        }
        else {
            const filteredArray = data.filter(item => item.category_id == id)
            setCategoryNews(filteredArray)
        }

    }, [id, data])



    return (
        <div className='grid grid-cols-1 gap-3'>
            <h1 className='font-bold'>Total <span className='text-secondary'>({categoryNews.length})</span> News found </h1>

            {categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)}
        </div>
    );
};

export default CategoryNews;