import React, { useState } from 'react';
import styles from './Comment.module.css';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { AiFillPlusSquare } from 'react-icons/ai';

const CommentPost = ({ posts }) => {
    const [showComments, setShowComments] = useState(false);

    console.log('posts', posts);

    return (
        <div className={styles.main}>
            {showComments && posts?.replies ? (
                <div
                    className={styles.line}
                    // showComments={showComments && posts?.replies}
                    onClick={() => {
                        setShowComments(!showComments);
                    }}
                ></div>
            ) : (
                <AiFillPlusSquare
                    style={{
                        color: 'black',
                        fontSize: '30px',
                        position: 'absolute',
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        setShowComments(!showComments);
                    }}
                />
            )}
            <div className={styles.card}>
                <p>{posts.author}</p>
                <h1>{posts.body}</h1>
                <div className={styles.options}>
                    <button>Reply</button>
                    <button>Give Award</button>
                    <button>Share</button>
                    <button>Report</button>
                    <button>Save</button>
                </div>
                {showComments && posts?.replies
                    ? posts.replies.map((el) => (
                          <div key={uuidv4()}>
                              <CommentPost posts={el} />
                          </div>
                      ))
                    : ''}
            </div>
        </div>
    );
};

export default CommentPost;
