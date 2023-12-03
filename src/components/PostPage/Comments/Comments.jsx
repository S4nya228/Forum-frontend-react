import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Comments/Comments.scss'
import axiosInstance from '../../../api/axiosInstance'
import { formatDistanceToNow } from 'date-fns'
import { parseISO } from 'date-fns/esm'
import { uk } from 'date-fns/locale'

const Comments = () => {
	const { postId } = useParams()
	const [comments, setComments] = useState([])

	const autoExpand = (field) => {
		field.style.height = 'inherit'
		const computedHeight = field.scrollHeight + 2
		field.style.height = `${computedHeight}px`
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axiosInstance.get(
					`/client/post/${postId}/comment/`
				)
				setComments(response.data.data)
			} catch (error) {
				console.error('Error fetching comments:', error)
			}
		}

		fetchData()
	}, [postId])

	return (
		<div className="comments">
			<div className="comments__container">
				<div className="comments__title">Comments</div>
				<div className="comments__create">
					<div className="comments__create-textarea">
						<textarea
							placeholder="Add new comment"
							onChange={(e) => {
								autoExpand(e.target)
							}}
						></textarea>
					</div>
					<div className="comments__create-button">
						<button>Comment</button>
					</div>
				</div>
				<div className="comments__count">300 comments</div>
				<div className="comments__list">
					{comments.map((comment) => (
						<div className="comments__list-item" key={comment.id}>
							<div className="comments__item-header">
								<div className="comments__item-header-avatar">
									<img src="/image/Avatar.svg" alt="avatar" />
								</div>
								<div className="comments__item-header-info">
									<div className="comments__item-header-info-name">
										{comment.user_name}
									</div>
									<div className="comments__item-header-info-date">
										{formatDistanceToNow(parseISO(comment.created_at), {
											addSuffix: true,
											locale: uk,
										})}
									</div>
								</div>
							</div>
							<div className="comments__item-body">
								<div className="comments__item-body-text">
									{comment.comment}
								</div>
								<div className="comments__functional">
									<div className="comments__voting">
										<button className="comments__vote-button">
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
										<span>{comment.comment_upvotes_count}</span>
										<button className="comments__vote-button">
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
									<div className="comments__reply">
										<button className="comments__reply-button">
											<img src="/image/myComments.svg" alt="icon for reply" />
											<span>Reply</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Comments
