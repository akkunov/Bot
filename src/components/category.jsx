import {useState} from 'react';
import css from '../styles/category.module.css'

function Category(props) {
    const [category,setCategory] = useState([])
    return (
        <div>
            <input type="text" className={css.input}/>
        </div>
    );
}

export default Category;