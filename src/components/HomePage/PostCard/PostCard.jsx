import React, { useEffect, useState } from 'react'
import '../PostCard/PostCard.scss'
import { Link, useParams } from 'react-router-dom'
import DescriptionPost from './DescriptionPost/DescriptionPost'
import axiosInstance from '../../../api/axiosInstance'
import { formatDistanceToNow } from 'date-fns'
import { parseISO } from 'date-fns/esm'
import UserAccount from './UserAccount/UserAccount'
import PostLink from './PostLink/PostLink'
import Another from './ButtonAnother/Another/Another'

const PostCard = ({ userPosts }) => {
	const [posts, setPosts] = useState([])
	const { userId } = useParams()

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const endpoint = userPosts ? `/user/id/${userId}` : '/client/post'
				const response = await axiosInstance.get(endpoint, {
					headers: {
						'Content-Type': 'application/json',
					},
				})
				setPosts(response.data.data.post ?? response.data.data)
			} catch (error) {
				console.error('Error fetching posts:', error)
			}
		}

		fetchPosts()
	}, [userPosts, userId])

	const stopPropagation = (event) => {
		event.stopPropagation()
	}

	return posts.map((post) =>
		post.post_id ? (
			<PostLink key={post.post_id} postId={post.post_id}>
				<div className="link-post__container">
					<div className="link-post__card">
						<div className="link-post__voting">
							<button
								className="link-post__vote-button"
								onClick={stopPropagation}
							>
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
							<span>{post.post_info.post_upvotes_count}</span>
							<button
								className="link-post__vote-button"
								onClick={stopPropagation}
							>
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
						<div className="link-post__main">
							<div className="link-post__information">
								<div className="link-post__group">
									<Link
										to="/group"
										className="link-post__icon-group"
										onClick={stopPropagation}
									>
										{post && post.community_info.avatar_path ? (
											<img
												src={post.community_info.avatar_path}
												alt="icon group"
											/>
										) : (
											<img src="/image/icon-group.svg" alt="icon group" />
										)}
									</Link>
									<Link
										to="/group"
										className="link-post__name-group"
										onClick={stopPropagation}
									>
										{post.community_info.name}
									</Link>
								</div>
								<span className="link-post__separator">•</span>
								<div className="link-post__author">
									<span>posted by</span>
									<div className="link-post__account">
										<UserAccount
											userId={post.user_info.user_id}
											userName={post.user_info.user_name}
										/>
									</div>
									<span className="link-post__create-time">
										{formatDistanceToNow(parseISO(post.created_at), {
											addSuffix: true,
										})}
									</span>
								</div>
							</div>
							<div className="link-post__box-info">
								<div className="link-post__title">{post.title}</div>
								<DescriptionPost>{post.description}</DescriptionPost>
								<div className="link-post__image">
									<img src={post.image} alt="image for post" />
								</div>
							</div>
							<div className="link-post__functional">
								<Link
									className="link-post__comments"
									to="/comments"
									onClick={stopPropagation}
								>
									<img src="/image/comentIcon.svg" alt="icon comments" />
									<span>{post.post_info.post_comments_count}</span>
									<span>Comments</span>
								</Link>
								<div className="link-post__save">
									<button type="button" onClick={stopPropagation}>
										<img src="/image/savePost.svg" alt="icon save post" />
										<span>Save</span>
									</button>
								</div>
								<Another key={post.postId} cardData={post} />
							</div>
						</div>
					</div>
				</div>
			</PostLink>
		) : null
	)
}

export default PostCard
