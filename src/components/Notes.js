import React from 'react';

function Notes({ data }) {
    return data.map((value) => <p>{value}</p>);
}

export default Notes;