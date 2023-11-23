import React from 'react'
import '../PostInformation/PostInformation.scss'
import useListHandling from '../../../hooks/useListHandling2.0'
import { Link } from 'react-router-dom'

const PostInformation = () => {
	const { isListOpen, toggleList, getDropdownStyles } = useListHandling()
	return (
		<div className="post-info">
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
								Ukraine_UA
							</Link>
							<span className="post-info__separator">•</span>
							<span className="post-info__create-time">22 hours ago</span>
						</div>
						<div className="post-info__author">
							<span>posted by</span>
							<Link to="/profile"> Sanya_228</Link>
						</div>
					</div>
				</div>
				<div className="post-info__box-info">
					<div className="post-info__title">
						What massively improved your mental health?
					</div>
					<div className="post-info__text">
						I (19m) recently moved into a shared place and there is someone who
						keeps stealing my food. At first I thought it was just a mistake but
						even my leftovers were being eaten. It was very clear that the
						person was doing it on purpose. I spoke to my housemates about how I
						would just prefer to be asked first but they were nonchalant about
						it and none of them admitted to doing it and I havent caught anyone
						in the act so I just tried to ignore it as it only happened every
						couple of days or so. A few days ago I came home from work with a
						carton of eggs that I found while dumpster diving and some bread. I
						wanted to give the eggs the water test first before eating them just
						to make sure that they are safe to consume but I was too tired and
						went to bed early without eating. The next day I found out that one
						of my housemates got so sick he ended up having to go to the
						emergency room. My eggs were not in the fridge where I left them but
						I saw the carton and shells in the trash and my bread was opened. I
						had a hunch that it was him because there was a possibility that the
						eggs had gone bad but I was also annoyed at the fact that he helped
						himself to my food without asking. When he came back, I asked him if
						he had eaten my eggs and bread but he denied. I then said okay but I
						hope whoever ate them doesnt get as sick as you did because I found
						the eggs in a dumpster. His face immediately dropped and he looked
						visibly uncomfortable. He got angry and went from saying that he may
						have consumed the food by mistake as he wasnt paying attention and
						doesnt exactly remember and accusing me of poisoning him. He said
						that its a health hazard to bring such food in communal spaces
						without warning everyone first as its not uncommon for people in
						shared places to eat other peoples food by mistake. He hasnt spoken
						to me since then and my housemates are siding with him and called me
						disgusting for doing that. A part of me feels like I wasnt wrong
						because they were MY eggs that I was fully intending on eating and I
						didnt think I had to warn people against eating food that didnt
						belong to them but I also do feel bad and guilty that he got sick.
						So Reddit please tell me if I was in the wrong? EDIT; Just to
						clarify because I see comments that suggest that I may have done it
						on purpose, I didnt. I have been dumpster diving for some of my food
						recently so I was fully intending on eating it just like I have been
						eating the food that I have been finding while dumpster diving. I
						try to exercise caution and thankfully it hasnt made me sick yet but
						had he not eaten it, I was probably going to end up in the ER myself
						because I was obviously going to eat it. I didnt randomly do it just
						to try bait and catch whoever has been eating my food. Food
						poisoning is not a joke. As I said I just moved recently and Im just
						trying to get on my feet. I also understand that although I make
						sure to wipe my food first, ultimately it is gross to put food that
						came from a dumpster in a communal fridge or pantry and will not
						continue to do so. I will just put it in my room from now on.
					</div>
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
									document.querySelector('.arrow-up').src = '/image/ArrowUp.svg'
								}}
							/>
						</button>
						<span>29</span>
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
		</div>
	)
}

export default PostInformation
