import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axiosInstance from '../../../../api/axiosInstance'
import { useSelector } from 'react-redux'

const VottingButtons = ({ postId, upvotesCount, initialUserVote }) => {
	const [arrowUpSrc, setArrowUpSrc] = useState(
		initialUserVote === true ? '/image/ArrowUpOrange.svg' : '/image/ArrowUp.svg'
	)
	const [arrowDownSrc, setArrowDownSrc] = useState(
		initialUserVote === false
			? '/image/ArrowDownOrange.svg'
			: '/image/ArrowDown.svg'
	)
	const token = useSelector((state) => state.auth.token)
	const [upvoteCount, setUpvoteCount] = useState(upvotesCount)
	const [userVote, setUserVote] = useState(initialUserVote)

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
				userVote === true ? '/image/ArrowUpOrange.svg' : '/image/ArrowUp.svg'
			)
		} else if (arrowType === 'down') {
			setArrowDownSrc(
				userVote === false
					? '/image/ArrowDownOrange.svg'
					: '/image/ArrowDown.svg'
			)
		}
	}

	const stopPropagation = (event) => {
		event.stopPropagation()
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

			setUpvoteCount(response.data.post_upvotes_count)
			setUserVote(userVote === vote ? null : vote)
			if (vote === null) {
				setArrowUpSrc('/image/ArrowUp.svg')
				setArrowDownSrc('/image/ArrowDown.svg')
			} else {
				if (vote) {
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

	return (
		<div className="link-post__voting">
			<button
				className="link-post__vote-button-up"
				onClick={(event) => {
					handleVote(true)
					stopPropagation(event)
				}}
				onMouseOver={() => handleMouseOver('up')}
				onMouseOut={() => handleMouseOut('up')}
			>
				<img className="arrow-up" src={arrowUpSrc} alt="voting arrow up" />
			</button>
			<span>{upvoteCount}</span>
			<button
				className="link-post__vote-button-down"
				onClick={(event) => {
					handleVote(false)
					stopPropagation(event)
				}}
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
	)
}

VottingButtons.propTypes = {
	upvotesCount: PropTypes.number.isRequired,
	postId: PropTypes.number.isRequired,
	initialUserVote: PropTypes.bool,
}

export default VottingButtons
