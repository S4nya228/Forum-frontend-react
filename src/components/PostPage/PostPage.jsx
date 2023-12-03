import React from 'react'
import '../PostPage/PostPage.scss'
import PostInformation from './PostInformation/PostInformation'
import AsideForPost from './AsideForPost/AsideForPost'
import Comments from './Comments/Comments'
import { useParams } from 'react-router-dom'

const PostPage = () => {
	const { postId } = useParams()

	return (
		<div className="post-page">
			<div className="post-page__container">
				<div className="post-page__main">
					<PostInformation postId={postId} />
					<Comments />
				</div>
				<div className="post-page__aside">
					<AsideForPost postId={postId} />
				</div>
			</div>
		</div>
	)
}

export default PostPage
