import React from 'react';

const CommentSection = () => {
    return (
        <div
            style={{
                width: '400px',
                height: '300px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                margin: '0 auto',
                marginTop: '50px'
            }}
        >
            <h2 style={{ textAlign: 'center' }}>Comments</h2>
            <ul style={{ listStyleType: 'none', padding: '0', marginTop: '16px' }}>
                <li>Sample Comment 1</li>
                <li>Sample Comment 2</li>
            </ul>
        </div>
    );
};

export default CommentSection;
