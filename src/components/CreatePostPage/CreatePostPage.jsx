import React from 'react'
import '../../components/CreatePostPage/CreatePostPage.scss'
import './DropDownList/DropDownList'
import DropDownList from './DropDownList/DropDownList'

const CreatePostPage = () => {
	return (
		<div className="create-post-page">
			<div className="create-post-page__container">
				<div className="create-post-page__main">
					<div className="create-post-page__title">
						<span>Create a post</span>
					</div>
					<div className="create-post-page__choose-group">
						<DropDownList />
					</div>
					<div className="create-post-page__box">
						<div className="create-post-page__option">
							<button>Post</button>
							<button>Image</button>
						</div>
						<div className="create-post-page__title-for-post">
							<input placeholder="Title" type="text" />
						</div>
						<div className="create-post-page__description-for-post">
							<textarea placeholder="Description"></textarea>
						</div>
						<div className="create-post-page__create-button">
							<button>Post</button>
						</div>
					</div>
				</div>
				<div className="create-post-page__aside">
					<div className="create-post-page__aside-title">
						<span>Posting to Connectopium</span>
					</div>
					<div className="create-post-page__list-information">
						<div className="create-post-page__list-item">
							<span>1. Remember the human</span>
						</div>
						<div className="create-post-page__list-item">
							<span>2. Behave like you would in real life</span>
						</div>
						<div className="create-post-page__list-item">
							<span>3. Look for the original source of content</span>
						</div>
						<div className="create-post-page__list-item">
							<span>4. Search for duplicates before posting</span>
						</div>
						<div className="create-post-page__list-item">
							<span>5. Read the community’s rules</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreatePostPage
