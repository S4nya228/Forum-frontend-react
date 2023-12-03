import React from 'react'
import '../Comments/Comments.scss'

const Comments = () => {
	const autoExpand = (field) => {
		field.style.height = 'inherit'
		const computedHeight = field.scrollHeight + 2
		field.style.height = `${computedHeight}px`
	}
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
					<div className="comments__list-item">
						<div className="comments__item-header">
							<div className="comments__item-header-avatar">
								<img src="/image/Avatar.svg" alt="avatar" />
							</div>
							<div className="comments__item-header-info">
								<div className="comments__item-header-info-name">Sanya228</div>
								<div className="comments__item-header-info-date">
									годину тому
								</div>
							</div>
						</div>
						<div className="comments__item-body">
							<div className="comments__item-body-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
									<span>10</span>
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
										<img src="/image/MyComments.svg" alt="icon for reply" />
										<span>Reply</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="comments__list-item">
						<div className="comments__item-header">
							<div className="comments__item-header-avatar">
								<img src="/image/Avatar.svg" alt="avatar" />
							</div>
							<div className="comments__item-header-info">
								<div className="comments__item-header-info-name">Sanya228</div>
								<div className="comments__item-header-info-date">рік назад</div>
							</div>
						</div>
						<div className="comments__item-body">
							<div className="comments__item-body-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem
								ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum
								dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor
								sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit
								amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,
								consectetur adipisicing elit.
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
									<span>10</span>
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
										<img src="/image/MyComments.svg" alt="icon for reply" />
										<span>Reply</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="comments__list-item">
						<div className="comments__item-header">
							<div className="comments__item-header-avatar">
								<img src="/image/Avatar.svg" alt="avatar" />
							</div>
							<div className="comments__item-header-info">
								<div className="comments__item-header-info-name">Sanya228</div>
								<div className="comments__item-header-info-date">
									2020-01-01
								</div>
							</div>
						</div>
						<div className="comments__item-body">
							<div className="comments__item-body-text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
									<span>10</span>
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
										<img src="/image/MyComments.svg" alt="icon for reply" />
										<span>Reply</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Comments
