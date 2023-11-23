import React from 'react'
import '../PostPage/PostPage.scss'
import PostInformation from './PostInformation/PostInformation'
import AsideForPost from './AsideForPost/AsideForPost'

const PostPage = () => {
	return (
		<div className="post-page">
			<div className="post-page__container">
				<div className="post-page__main">
					<PostInformation />
				</div>
				<div className="post-page__aside">
					<AsideForPost />
				</div>
			</div>
		</div>
	)
}

export default PostPage
