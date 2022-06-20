import React from 'react'

const Loading = ({ loading }) => {
    return (
        <div>
            {loading && <div> <svg className="spinner" viewBox="0 0 50 50">
                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg> </div>}
        </div>
    )
}

export default Loading