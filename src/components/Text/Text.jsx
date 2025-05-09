import React from 'react'

const Text = ({ text }) => {
    return (
        <div className="mt-2.5">
            <p className="text-gray-200 bg-white/10 backdrop-blur-sm rounded-lg p-3">{text}</p>
        </div>
    )
}

export default Text;