import React from 'react';
import DateTime from './DateTime';
import WithPretty from './WithPretty';
import PropTypes from 'prop-types';

const DateTimePretty = WithPretty(DateTime);

function Video(props) {
    return (
        <div className="video">
            <iframe 
                src={props.url} 
                title="video" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen
            ></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

Video.propTypes = {
    url: PropTypes.string,
    date: PropTypes.string
}

export default Video