import React from 'react'

const Category = (props) => {
    return (
        <ul className='category'>
            {
                props.categories.map(category => {
                    const { id, style, title } = category
                    return <li key={id} style={style}>{title}</li>
                })
            }
        </ul>
    )
}

export default Category
