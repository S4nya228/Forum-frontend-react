import React, { useEffect, useState } from 'react'
import '../PostInformation/PostInformation.scss'
import useListHandling from '../../../hooks/useListHandling2.0'
import { Link, useParams } from 'react-router-dom'
import axiosInstance from '../../../api/axiosInstance'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import { parseISO } from 'date-fns/esm'

const PostInformation = () => {
	const { isListOpen, toggleList, getDropdownStyles } = useListHandling()
	const [postData, setPostData] = useState(null)
	const { postId } = useParams()

	useEffect(() => {
		const fetchPostData = async () => {
			try {
				const response = await axiosInstance.get(`/client/post/${postId}`)

				setPostData(response.data.data)
			} catch (error) {
				console.error('Error:', error)
			}
		}
		fetchPostData()
	}, [postId])

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
						<div className="post-info__text">{postData.description}</div>
					</div>
					<div className="post-info__functional">
						<div className="post-info__voting">
							<button className="post-info__vote-button">
								<img
									className="arrow-up"
									src="/image/ArrowUp.svg"
									alt="voting arrow "
									onMouseOver={() => {
										document.querySelector('.arrow-up').src =
											'/image/ArrowUpOrange.svg'
									}}
									onMouseOut={() => {
										document.querySelector('.arrow-up').src =
											'/image/ArrowUp.svg'
									}}
								/>
							</button>
							<span>{postData.post_info.post_upvotes_count}</span>
							<button className="post-info__vote-button">
								<img
									className="arrow-down"
									src="/image/ArrowDown.svg"
									alt="voting arrow"
									onMouseOver={() => {
										document.querySelector('.arrow-down').src =
											'/image/ArrowDownOrange.svg'
									}}
									onMouseOut={() => {
										document.querySelector('.arrow-down').src =
											'/image/ArrowDown.svg'
									}}
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
