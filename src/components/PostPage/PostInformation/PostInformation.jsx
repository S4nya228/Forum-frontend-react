import React, { useEffect, useState } from 'react'
import '../PostInformation/PostInformation.scss'
import useListHandling from '../../../hooks/useListHandling2.0'
import { Link, useParams } from 'react-router-dom'
import axiosInstance from '../../../api/axiosInstance'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import { parseISO } from 'date-fns/esm'
import Comments from '../Comments/Comments'
import { useSelector } from 'react-redux'

const PostInformation = () => {
	const { isListOpen, toggleList, getDropdownStyles } = useListHandling()
	const [postData, setPostData] = useState(null)
	const { postId } = useParams()
	const token = useSelector((state) => state.auth.token)
	const [arrowUpSrc, setArrowUpSrc] = useState('/image/ArrowUp.svg')
	const [arrowDownSrc, setArrowDownSrc] = useState('/image/ArrowDown.svg')

	useEffect(() => {
		const fetchPostData = async () => {
			try {
				const response = await axiosInstance.get(`/client/post/${postId}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})

				setPostData(response.data.data)
				if (response.data.data.user_upvote === null) {
					setArrowUpSrc('/image/ArrowUp.svg')
					setArrowDownSrc('/image/ArrowDown.svg')
				} else {
					if (response.data.data.user_upvote) {
						setArrowUpSrc('/image/ArrowUpOrange.svg')
						setArrowDownSrc('/image/ArrowDown.svg')
					} else {
						setArrowDownSrc('/image/ArrowDownOrange.svg')
						setArrowUpSrc('/image/ArrowUp.svg')
					}
				}
			} catch (error) {
				console.error('Error:', error)
			}
		}
		fetchPostData()
	}, [postId, token])

	const handleMouseOver = (arrowType) => {
		if (arrowType === 'up') {
			setArrowUpSrc('/image/ArrowUpOrange.svg')
		} else if (arrowType === 'down') {
			setArrowDownSrc('/image/ArrowDownOrange.svg')
		}
	}

	const handleMouseOut = (arrowType) => {
		if (arrowType === 'up') {
			setArrowUpSrc(
				postData.user_upvote === true
					? '/image/ArrowUpOrange.svg'
					: '/image/ArrowUp.svg'
			)
		} else if (arrowType === 'down') {
			setArrowDownSrc(
				postData.user_upvote === false
					? '/image/ArrowDownOrange.svg'
					: '/image/ArrowDown.svg'
			)
		}
	}

	const handleVote = async (vote) => {
		try {
			const response = await axiosInstance.post(
				`/client/post/${postId}/upvote`,
				{ upvote: vote },
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)

			const userVote = postData.user_upvote == vote ? null : vote

			setPostData({
				...postData,
				post_info: {
					...postData.post_info,
					post_upvotes_count: response.data.post_upvotes_count,
				},
				user_upvote: vote,
			})

			if (userVote === null) {
				setArrowUpSrc('/image/ArrowUp.svg')
				setArrowDownSrc('/image/ArrowDown.svg')
			} else {
				if (userVote) {
					setArrowUpSrc('/image/ArrowUpOrange.svg')
					setArrowDownSrc('/image/ArrowDown.svg')
				} else {
					setArrowDownSrc('/image/ArrowDownOrange.svg')
					setArrowUpSrc('/image/ArrowUp.svg')
				}
			}
		} catch (error) {
			console.error('Error submitting vote:', error)
		}
	}

	const postImage =
		postData && postData.image
			? `${axiosInstance.defaults.baseURL}/getImage/${postData.image}`
			: ''

	return (
		<div className="post-info">
			{postData ? (
				<div className="post-info__container">
					<div className="post-info__information">
						<div className="post-info__avatar">
							<Link to="/group" className="post-info__icon-group">
								<img src="/image/icon-group.svg" alt="icon group" />
							</Link>
						</div>
						<div className="post-info__group">
							<div className="post-info__group-info">
								<Link to="/group" className="post-info__name-group">
									{postData.community_info.name}
								</Link>
								<span className="post-info__separator">•</span>
								<span className="post-info__create-time">
									{formatDistanceToNow(parseISO(postData.created_at), {
										addSuffix: true,
									})}
								</span>
							</div>
							<div className="post-info__author">
								<span>posted by</span>
								<Link to={`/user/id/${postData.user_info.user_id}`}>
									{postData.user_info.user_name}
								</Link>
							</div>
						</div>
					</div>
					<div className="post-info__box-info">
						<div className="post-info__title">{postData.title}</div>
						{postImage ? (
							<div className="link-post__image">
								<img src={postImage} alt="post photo" />
							</div>
						) : (
							<div className="post-info__text">{postData.description}</div>
						)}
					</div>
					<div className="post-info__functional">
						<div className="post-info__voting">
							<button
								className="post-info__vote-button-up"
								onClick={() => handleVote(true)}
								onMouseOver={() => handleMouseOver('up')}
								onMouseOut={() => handleMouseOut('up')}
							>
								<img
									className="arrow-up"
									src={arrowUpSrc}
									alt="voting arrow up"
								/>
							</button>
							<span>{postData.post_info.post_upvotes_count}</span>
							<button
								className="post-info__vote-button-down"
								onClick={() => handleVote(false)}
								onMouseOver={() => handleMouseOver('down')}
								onMouseOut={() => handleMouseOut('down')}
							>
								<img
									className="arrow-down"
									src={arrowDownSrc}
									alt="voting arrow down"
								/>
							</button>
						</div>
						<div className="post-info__share">
							<button type="button">
								<img src="/image/sharePost.svg" alt="icon share post" />
								<span>Share</span>
							</button>
						</div>
						<div className="post-info__save">
							<button type="button">
								<img src="/image/savePost.svg" alt="icon save post" />
								<span>Save</span>
							</button>
						</div>
						<div className="post-info__another">
							<button type="button" onClick={toggleList}>
								•••
							</button>
							{isListOpen && (
								<ul
									className="post-info__action-list"
									style={getDropdownStyles()}
								>
									<li className="post-info__list-item-save">
										<img src="/image/savePost.svg" alt="icon for save post" />
										<span>Save</span>
									</li>
									<li className="post-info__list-item">
										<img
											src="/image/report_post.svg"
											alt="icon for report post"
										/>
										<span>Report</span>
									</li>
								</ul>
							)}
						</div>
					</div>
					<Comments commentCount={postData.comments_count} />
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	)
}

PostInformation.propTypes = {
	postId: PropTypes.number.isRequired,
}

export default PostInformation
