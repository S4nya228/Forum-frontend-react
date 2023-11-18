import React from 'react'
import '../../components/CreatePostPage/CreatePostPage.scss'
import './DropDownList/DropDownList'
import DropDownList from './DropDownList/DropDownList'
import useMaxLenght from '../../hooks/useMaxLenght'
import usePhotoUpload from '../../hooks/usePhotoUpload'
import usePostModeSwitch from '../../hooks/usePostModeSwitch'

const CreatePostPage = () => {
	const {
		title,
		description,
		handleChangeDescription,
		handleChangeTitle,
		titleMaxLength,
		descriptionMaxLength,
	} = useMaxLenght()

	const { selectedFile, handleFileChange, handleDeleteFile } = usePhotoUpload()

	const { postMode, switchToImageMode, switchToTextMode } = usePostModeSwitch()

	const autoExpand = (field) => {
		field.style.height = 'inherit'
		const computedHeight = field.scrollHeight + 2
		field.style.height = `${computedHeight}px`
	}
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
							<button onClick={switchToTextMode}>
								<img
									src="/image/icon_create-post.svg"
									alt="icon for create post with text"
								/>
								<span>Post</span>
							</button>
							<button onClick={switchToImageMode}>
								<img
									src="/image/icon_create-post-image.svg"
									alt="icon for create post with image"
								/>
								<span>Image</span>
							</button>
						</div>
						<div className="create-post-page__title-for-post">
							<textarea
								placeholder="Title"
								value={title}
								onChange={(e) => {
									handleChangeTitle(e)
									autoExpand(e.target)
								}}
								maxLength={titleMaxLength}
							/>
							<span className="create-post-page__count-title">{`${title.length}/${titleMaxLength}`}</span>
						</div>
						{postMode === 'text' && (
							<div className="create-post-page__description-for-post">
								<textarea
									placeholder="Description"
									value={description}
									onChange={(e) => {
										handleChangeDescription(e)
										autoExpand(e.target)
									}}
									maxLength={descriptionMaxLength}
								></textarea>
								<span className="create-post-page__count-description">{`${description.length}/${descriptionMaxLength}`}</span>
							</div>
						)}
						{postMode === 'image' && (
							<div className="create-post-page__image-for-post">
								<div className="create-post-page__area-for-image">
									{!selectedFile && (
										<label className="create-post-page__input-label">
											<span className="create-post-page__input-text">
												Drag and drop image or
											</span>
											<input
												type="file"
												className="create-post-page__input"
												onChange={handleFileChange}
												accept="image/png,image/gif,image/jpeg,image/webp"
											/>
											<span className="create-post-page__input-button">
												Upload
											</span>
										</label>
									)}
									{selectedFile && (
										<div className="create-post-page__preview-container">
											<img
												src={URL.createObjectURL(selectedFile)}
												alt="Selected Preview"
											/>
											<span
												className="create-post-page__delete-icon"
												onClick={handleDeleteFile}
											>
												<img
													src="/image/icon_trash.svg"
													alt="icon for delete image"
												/>
											</span>
										</div>
									)}
								</div>
							</div>
						)}
						<div className="create-post-page__create-button">
							<button>Post</button>
						</div>
					</div>
				</div>
				<div className="create-post-page__aside">
					<div className="create-post-page__aside-title">
						<span>
							For a positive and safe use of Connectopium, please follow the
							rules:
						</span>
					</div>
					<div className="create-post-page__list-information">
						<div className="create-post-page__list-item">
							<span>1. Remember humanity</span>
						</div>
						<div className="create-post-page__list-item">
							<span>2. Behave as you would in real life</span>
						</div>
						<div className="create-post-page__list-item">
							<span>3. Find the original source of content</span>
						</div>
						<div className="create-post-page__list-item">
							<span>4. Check for duplicates before publishing</span>
						</div>
						<div className="create-post-page__list-item">
							<span>5. Read the community rules</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreatePostPage
