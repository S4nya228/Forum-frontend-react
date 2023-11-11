import React from 'react'
import '../CreatePost/CreatePost.scss'

const CreatePost = () => {
	return (
		<div className="create-post">
			<div className="create-post__container">
				<div className="create-post__icon">
					<a href="#">
						<img src="/image/Avatar.svg" alt="avatar" />
					</a>
				</div>
				<div className="create-post__input-data">
					<input
						type="text"
						placeholder="Let’s share what going on your mind..."
					/>
				</div>
				<div className="create-post__button">
					<button type="button">Create Post</button>
				</div>
			</div>
		</div>
	)
}

export default CreatePost
