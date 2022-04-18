import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Typography, TextField, Button, IconButton } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './styles';

import { commentPost, deleteComment } from '../../actions/posts';

const CommentSection = ({ post }) => {
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const [comments, setComments] = useState([...post?.comments].reverse());
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem('profile'));
  const userId = user?.result.googleId || user?.result?._id;

  const handleComment = async () => {
    const newComments = await dispatch(
      commentPost(`${user?.result?.name}: ${comment}`, post._id)
    );

    setComment('');
    setComments(newComments.reverse());
  };

  const deleteC = async (c) => {
    const newComments = comments.filter((comment) => comment !== c);

    dispatch(deleteComment(newComments, post._id));

    setComments(newComments);
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant='h6'>
            Comments
          </Typography>
          {comments?.map((c, i) => (
            <Typography key={i} gutterBottom variant='subtitle1'>
              {userId === c[1] && (
                <IconButton
                  aria-label='delete'
                  className={classes.deleteButton}
                  onClick={() => deleteC(c)}
                >
                  <DeleteIcon fontSize='small' />
                </IconButton>
              )}
              <strong>{c[0].split(': ')[0]}:</strong>
              {c[0].split(':')[1]}
            </Typography>
          ))}
        </div>
        {user?.result?.name && (
          <div style={{ width: '70%' }}>
            <Typography gutterBottom variant='h6'>
              Write a comment
            </Typography>
            <TextField
              fullWidth
              minRows={4}
              variant='outlined'
              label='Comment'
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <br />
            <Button
              style={{ marginTop: '10px' }}
              fullWidth
              disabled={!comment.length}
              color='primary'
              variant='contained'
              onClick={handleComment}
            >
              Comment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
