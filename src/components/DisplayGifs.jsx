import React from 'react'
import useApi from '../hooks/useApi';
import ImageItem from './ImageItem';


const DisplayGifs = ({ category }) => {

    const url = ` https://api.giphy.com/v1/gifs/search?api_key=hcrx1LW3WDrFJ2X9YaYWlfHg9JNuiZdF&q=${category}&limit=12 `;
    const { loading, data } = useApi(url);

    return (  
        <div className='container-gifs'>
            {
                loading ?
                data.map(img => (
                    <ImageItem key={img.id} title={img.title} url={img.images.downsized_medium.url} className="" />
                ))
                : ''
            }
        </div>

    );
}
 
export default DisplayGifs;