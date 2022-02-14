import React from 'react'

const QuoteViewer = ({randQuote}) => {
    return (
        <div>
            <p>{randQuote.quote}</p>
            <p>{randQuote.explanation}</p>
            <p>{randQuote.ranking}</p>
        </div>
    )
}

export default QuoteViewer