import React, { useState } from 'react'
import '../../components/CreatePostPage/CreatePostPage.scss'
import DropDownList from './DropDownList/DropDownList'
import useMaxLenght from '../../hooks/useMaxLenght'
import usePhotoUpload from '../../hooks/usePhotoUpload'
import usePostModeSwitch from '../../hooks/usePostModeSwitch'
import { useDrop } from 'react-dnd'
import { NativeTypes } from 'react-dnd-html5-backend'
import axiosInstance from '../../api/axiosInstance'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as postValidations from '../../validations/postValidations'

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
	const [selectedGroup, setSelectedGroup] = useState(null)
	const token = useSelector((state) => state.auth.token)
	const navigate = useNavigate()
	const [groupError, setGroupError] = useState('')
	const [titleError, setTitleError] = useState('')
	const [descriptionError, setDescriptionError] = useState('')
	const [imageError, setImageError] = useState('')

	const handleGroupChange = (selectedOption) => {
		setSelectedGroup(selectedOption)
	}

	const autoExpand = (field) => {
		field.style.height = 'inherit'
		const computedHeight = field.scrollHeight + 2
		field.style.height = `${computedHeight}px`
	}

	const [{ canDrop, isOver }, drop] = useDrop({
		accept: NativeTypes.FILE,
		drop: (item, monitor) => {
			if (monitor) {
				const files = monitor.getItem().files
				if (files && files.length > 0) {
					const acceptedFiles = files.filter(
						(file) =>
							file.type === 'image/png' ||
							file.type === 'image/jpg' ||
							file.type === 'image/gif' ||
							file.type === 'image/jpeg' ||
							file.type === 'image/webp'
					)
					if (acceptedFiles.length > 0) {
						handleFileChange({ target: { files: acceptedFiles } })
					}
				}
			}
		},
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	})

	const isActive = canDrop && isOver

	const handleCreatePost = async () => {
		const groupError = postValidations.validateGroup(selectedGroup)
		const titleError = postValidations.validateTitle(title)
		const descriptionError = postValidations.validateDescription(
			description,
			postMode
		)
		const imageError = postValidations.validateImage(selectedFile, postMode)

		setGroupError(groupError)
		setTitleError(titleError)
		setDescriptionError(descriptionError)
		setImageError(imageError)

		if (groupError || titleError || descriptionError || imageError) {
			return
		}

		try {
			const postData = {
				community_id: selectedGroup ? selectedGroup.value : null,
				title: title,
			}

			if (postMode === 'text') {
				postData.description = description
			} else if (postMode === 'image') {
				postData.image = selectedFile
			}

			await axiosInstance.post('/client/post', postData, {
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'multipart/form-data',
				},
			})

			navigate('/')
		} catch (error) {
			console.error('error:', error.response)
		}
	}

	return (
		<div className="create-post-page">
			<div className="create-post-page__container">
				<div className="create-post-page__main">
					<div className="create-post-page__title">
						<span>Create a post</span>
					</div>
					<div className="create-post-page__choose-group">
						<DropDownList onChange={handleGroupChange} value={selectedGroup} />
						{groupError && (
							<span className="validation-error">{groupError}</span>
						)}
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
						<div className="create-post-page__title-input">
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
							{titleError && (
								<span className="validation-error">{titleError}</span>
							)}
						</div>

						{postMode === 'text' && (
							<div className="create-post-page__description-input">
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
								{descriptionError && (
									<span className="validation-error">{descriptionError}</span>
								)}
							</div>
						)}
						{postMode === 'image' && (
							<div className="create-post-page__image-for-post">
								<div
									className={`create-post-page__area-for-image ${
										isActive ? 'active' : ''
									}`}
									ref={drop}
								>
									{!selectedFile && (
										<label className="create-post-page__input-label">
											<span className="create-post-page__input-text">
												{isActive
													? 'Drop the image here'
													: 'Drag and drop image or'}
											</span>
											<input
												type="file"
												className="create-post-page__input"
												onChange={handleFileChange}
												accept="image/png,image/jpg,image/gif,image/jpeg,image/webp"
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
								{imageError && (
									<span className="validation-error">{imageError}</span>
								)}
							</div>
						)}
						<div className="create-post-page__create-button">
							<button onClick={handleCreatePost}>Post</button>
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
