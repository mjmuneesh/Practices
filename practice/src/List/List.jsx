
import React from 'react'

function List({ data }) {
    return (
        <div>
            <ul>
                {
                    data.map(name => {
                        return (<li>{name.Apple }</li>)
                    })
                }
            </ul>
        </div>
    )
}

export default List
