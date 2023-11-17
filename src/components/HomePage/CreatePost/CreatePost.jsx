import React from 'react'
import { Link } from 'react-router-dom'
import '../CreatePost/CreatePost.scss'

const CreatePost = () => {
	return (
		<div className="create-post">
			<div className="create-post__container">
				<div className="create-post__icon">
					<Link to="/myAcc">
						<img src="/image/Avatar.svg" alt="avatar" />
					</Link>
				</div>
				<div className="create-post__input-data">
					<input
						type="text"
						placeholder="Let’s share what going on your mind..."
					/>
				</div>
				<div className="create-post__button">
					<Link to="/create" className="create-post__button-link">
						Create Post
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CreatePost
