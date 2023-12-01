import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../GroupCard/GroupCard.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axiosInstance'

const GroupCard = () => {
	const token = useSelector((state) => state.auth.token)
	const [groupData, setGroupData] = useState(null)
	const navigate = useNavigate()
	const { postId } = useParams()

	useEffect(() => {
		const fetchGroupData = async () => {
			try {
				const response = await axiosInstance.get(`/client/post/${postId}`)
				const createdDate = new Date(
					response.data.data.community_info.created_at
				)

				const formattedDate = createdDate.toLocaleDateString('uk-UA', {
					month: 'long',
					day: 'numeric',
					year: 'numeric',
				})

				setGroupData({
					...response.data.data,
					formattedDate: formattedDate,
				})
			} catch (error) {
				console.error('Error:', error.response)
			}
		}
		fetchGroupData()
	}, [postId])

	const handleJoinGroup = () => {
		if (token) {
			console.log('вступив')
		} else {
			console.log('невступив:')
			navigate('/login')
		}
	}

	return (
		<div className="card-group">
			{groupData && (
				<div className="card-group__container">
					<div className="card-group__banner">
						<img src="/image/banner.jpg" alt="banner for group" />
					</div>
					<div className="card-group__title">
						<div className="card-group__avatar">
							<img src="/image/icon-group.svg" alt="avatar user" />
						</div>
						<div className="card-group__name">
							<span>{groupData.community_info.name}</span>
						</div>
					</div>
					<div className="card-group__information-box">
						<div className="card-group__description">
							<span>{groupData.community_info.description}</span>
						</div>
						<div className="card-group__registration-date">
							<img src="/image/reg_day.svg" alt="icon for reg date" />
							<span>{groupData.formattedDate}</span>
						</div>
						<div className="card-group__more-info">
							<div className="card-group__count-posts">
								<img
									src="/image/icon_create-post.svg"
									alt="icon for count post"
								/>
								<span>{`${groupData.community_info.post_count} posts`}</span>
							</div>
							<div className="card-group__count-followers">
								<img src="/image/public_icon.svg" alt="icon for followers" />
								<span>{`${groupData.community_info.subcriber_count} members`}</span>
							</div>
						</div>
						<div className="card-group__join">
							<button onClick={handleJoinGroup}>Join</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default GroupCard

{
	/* <div className="card-group__settings">
					<img src="/image/settings.svg" alt="icon for settings" />
				</div> */
}
