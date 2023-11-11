import React from 'react'
import '../PostCard/PostCard.scss'
import { Link } from 'react-router-dom'
import usePostCardHooks from '../../../hooks/usePostCardHooks'

const PostCard = () => {
	const { textareaRef, handleButtonClick, handleTextareaInput } =
		usePostCardHooks()

	return (
		<Link to="/post" className="link-post" href="">
			<div className="link-post__container">
				<div className="link-post__card">
					<div className="link-post__voting">
						<button
							className="link-post__vote-button"
							onClick={handleButtonClick}
						>
							<img src="/image/ArrowUp.svg" alt="voting arrow " />
						</button>
						<span>29</span>
						<button
							className="link-post__vote-button"
							onClick={handleButtonClick}
						>
							<img src="/image/ArrowDown.svg" alt="voting arrow " />
						</button>
					</div>
					<div className="link-post__main">
						<div className="link-post__information">
							<div className="link-post__group">
								<Link to="/group" className="link-post__icon-group">
									<img src="/image/icon-group.svg" alt="icon group" />
								</Link>
								<Link to="/group" className="link-post__name-group">
									Ukraine_UA
								</Link>
							</div>
							<span className="link-post__separator">•</span>
							<div className="link-post__author">
								<span>posted by</span>
								<div className="link-post__account">
									<Link to="/account">Sanya_228</Link>
								</div>
								<span className="link-post__create-time">22 hours ago</span>
							</div>
						</div>
						<div className="link-post__box-info">
							<div className="link-post__title">
								What massively improved your mental health?
							</div>
							<div className="link-post__text">
								<textarea
									ref={textareaRef}
									onInput={handleTextareaInput}
									readOnly
									name=""
									id=""
								>
									Привіт. Недавно зі мною трапилася ситуація, пару неділь назад
									я купував продукти в АТБ. І так трапилося що по прибуттю
									додому я забув оплатити батарейки за 90 грн. Я їх просто кинув
									в кишеню бо були зайняті руки і треба було дістати телефон та
									й взагалі забув про ці батарейки бо після цього обидва хлягли
									по хворобі. Однак, сьогодні моя дівчина прийшла в сльозах бо
									сказала що в цьому магазині до неї в магазині докопався
									охоронець і почав вимагати мої контакти і покликати мене,
									вона, само собою нічого не дала. Охоронець почав показувати
									запис де я кладу батарейки,розказувати які ми підозрілі, що я
									зробив це спеціально, розказував про те що він СЛІДКУВАВ за
									нами, знає де ми живемо, де ходимо ( це все ще батарейки за
									100 грн), і почав вимагати її оплатити дві пачки замість
									одної, при цьому він чек і все це забрав. В мене питання, хто
									в ці ситуації правий? Привіт. Недавно зі мною трапилася
									ситуація, пару неділь назад я купував продукти в АТБ. І так
									трапилося що по прибуттю додому я забув оплатити батарейки за
									90 грн. Я їх просто кинув в кишеню бо були зайняті руки і
									треба було дістати телефон та й взагалі забув про ці батарейки
									бо після цього обидва хлягли по хворобі. Однак, сьогодні моя
									дівчина прийшла в сльозах бо сказала що в цьому магазині до
									неї в магазині докопався охоронець і почав вимагати мої
									контакти і покликати мене, вона, само собою нічого не дала.
									Охоронець почав показувати запис де я кладу
									батарейки,розказувати які ми підозрілі, що я зробив це
									спеціально, розказував про те що він СЛІДКУВАВ за нами, знає
									де ми живемо, де ходимо ( це все ще батарейки за 100 грн), і
									почав вимагати її оплатити дві пачки замість одної, при цьому
									він чек і все це забрав. В мене питання, хто в ці ситуації
									правий?
								</textarea>
							</div>
						</div>
						<div className="link-post__functional">
							<Link className="link-post__comments" to="/comments">
								<img src="/image/comentIcon.svg" alt="icon comments" />
								<span>8 Comments</span>
							</Link>
							<div className="link-post__share">
								<button type="button" onClick={handleButtonClick}>
									<img src="/image/sharePost.svg" alt="icon share post" />
									<span>Share</span>
								</button>
							</div>
							<div className="link-post__save">
								<button type="button" onClick={handleButtonClick}>
									<img src="/image/savePost.svg" alt="icon save post" />
									<span>Save</span>
								</button>
							</div>
							<div className="link-post__another">
								<button type="button" onClick={handleButtonClick}>
									•••
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default PostCard
