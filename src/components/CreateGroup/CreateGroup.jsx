import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './CreateGroup.scss'
import axiosInstance from '../../api/axiosInstance'
import { useSelector } from 'react-redux'

const CreateGroup = ({ onClose }) => {
	const [isVisible, setIsVisible] = useState(true)
	const [groupName, setGroupName] = useState('')
	const [groupType, setGroupType] = useState('')
	const [isNsfw, setIsNsfw] = useState(false)
	const token = useSelector((state) => state.auth.token)

	const handleCloseClick = () => {
		setIsVisible(false)
		onClose()
	}

	const handleCreateGroup = async () => {
		try {
			const response = await axiosInstance.post(
				'/client/community',
				{
					name: groupName,
					type: groupType,
					disclaimer: isNsfw,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			console.log('response:', response)
			handleCloseClick()
		} catch (error) {
			console.error('error:', error.response)
		}
	}

	return isVisible ? (
		<div className="create-group">
			<div className="create-group__container">
				<button
					className="create-group__close-button"
					onClick={handleCloseClick}
				>
					&times;
				</button>
				<div className="create-group__title">
					<span>Create a group</span>
				</div>
				<div className="create-group__name">
					<span>Name</span>
					<input
						type="text"
						placeholder="Name for your group"
						value={groupName}
						onChange={(e) => setGroupName(e.target.value)}
					/>
				</div>
				<div className="create-group__types">
					<span>Group type</span>
					<div className="create-group__list-types">
						<div className="create-group__type">
							<input
								type="radio"
								name="groupType"
								id="public"
								checked={groupType === 'public'}
								onChange={() => setGroupType('public')}
							/>
							<label htmlFor="public" className="create-group__radio-label">
								<div className="create-group__information">
									<div className="create-group__type-name">
										<img src="/image/public_icon.svg" alt="" />
										<p>Public</p>
									</div>
									<span>
										Anyone can view, post, and comment to this community
									</span>
								</div>
							</label>
						</div>
						<div className="create-group__type">
							<input
								type="radio"
								name="groupType"
								id="restricted"
								checked={groupType === 'restricted'}
								onChange={() => setGroupType('restricted')}
							/>
							<label htmlFor="restricted" className="create-group__radio-label">
								<div className="create-group__information">
									<div className="create-group__type-name">
										<img src="/image/restricted_icon.svg" alt="" />
										<p>Restricted</p>
									</div>
									<span>Only approved members can view and participate</span>
								</div>
							</label>
						</div>
						<div className="create-group__type">
							<input
								type="radio"
								name="groupType"
								id="private"
								checked={groupType === 'private'}
								onChange={() => setGroupType('private')}
							/>
							<label htmlFor="private" className="create-group__radio-label">
								<div className="create-group__information">
									<div className="create-group__type-name">
										<img src="/image/private_icon.svg" alt="" />
										<p>Private</p>
									</div>
									<span>Only approved members can view and participate</span>
								</div>
							</label>
						</div>
					</div>
				</div>
				<div className="create-group__nsfw">
					<span>NSFW content</span>
					<div className="create-group__nsfw-checkbox">
						<input
							type="checkbox"
							id="nsfwCheckbox"
							checked={isNsfw}
							onChange={() => setIsNsfw(!isNsfw)}
						/>
						<label
							htmlFor="nsfwCheckbox"
							className="create-group__checkmark"
						></label>
						<p>18+ year old community</p>
					</div>
				</div>
				<div className="create-group__create-button">
					<button onClick={handleCreateGroup}>Create</button>
				</div>
			</div>
		</div>
	) : null
}

CreateGroup.propTypes = {
	onClose: PropTypes.func.isRequired,
}

export default CreateGroup
