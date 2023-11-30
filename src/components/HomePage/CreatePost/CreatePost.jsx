import React from 'react'
import { Link } from 'react-router-dom'
import '../CreatePost/CreatePost.scss'

const CreatePost = () => {
	return (
		<div className="create-post">
			<div className="create-post__container">
				<div className="create-post__icon">
					<img src="/image/Avatar.svg" alt="avatar" />
				</div>
				<div className="create-post__input-data">
					<Link to="/create-post">
						<input
							type="text"
							readOnly
							placeholder="Let’s share what going on your mind..."
						/>
					</Link>
				</div>
				<div className="create-post__button">
					<Link to="/create-post" className="create-post__button-link">
						Create Post
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CreatePost
