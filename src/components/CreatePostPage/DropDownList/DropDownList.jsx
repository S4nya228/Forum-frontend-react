import React from 'react'

import '../DropDownList/DropDownList.scss'

import Select from 'react-select'

const options = [
	{
		value: 'Ukraine',
		label: (
			<div className="react-select__group">
				<img src="/image/icon-group.svg" alt="Item 2" />
				<div className="react-select__info-box">
					<span className="react-select__name-group">Ukraine</span>
					<span className="react-select__desc-group">41,123,534 Followers</span>
				</div>
			</div>
		),
	},
	{
		value: 'Dota Two',
		label: (
			<div className="react-select__group">
				<img src="/image/icon-group.svg" alt="Item 2" />
				<div className="react-select__info-box">
					<span className="react-select__name-group">irl_me</span>
					<span className="react-select__desc-group">1,123,534 Followers</span>
				</div>
			</div>
		),
	},
	{
		value: 'Counter Strike',
		label: (
			<div className="react-select__group">
				<img src="/image/icon-group.svg" alt="Item 2" />
				<div className="react-select__info-box">
					<span className="react-select__name-group">Minecraft</span>
					<span className="react-select__desc-group">
						2,111,324,534 Followers
					</span>
				</div>
			</div>
		),
	},
	{
		value: 'irl_me',
		label: (
			<div className="react-select__group">
				<img src="/image/icon-group.svg" alt="Item 2" />
				<div className="react-select__info-box">
					<span className="react-select__name-group">Counter Strike 2</span>
					<span className="react-select__desc-group">21,343,534 Followers</span>
				</div>
			</div>
		),
	},
	{
		value: 'item2',
		label: (
			<div className="react-select__group">
				<img src="/image/icon-group.svg" alt="Item 2" />
				<div className="react-select__info-box">
					<span className="react-select__name-group">Dota 2</span>
					<span className="react-select__desc-group">123,534 Followers</span>
				</div>
			</div>
		),
	},
	{
		value: 'item2',
		label: (
			<div className="react-select__group">
				<img src="/image/icon-group.svg" alt="Item 2" />
				<div className="react-select__info-box">
					<span className="react-select__name-group">УжНУ</span>
					<span className="react-select__desc-group">1,123,534 Followers</span>
				</div>
			</div>
		),
	},
	{
		value: 'item2',
		label: (
			<div className="react-select__group">
				<img src="/image/icon-group.svg" alt="Item 2" />
				<div className="react-select__info-box">
					<span className="react-select__name-group">Олексійко</span>
					<span className="react-select__desc-group">31,123,534 Followers</span>
				</div>
			</div>
		),
	},
	{
		value: 'item2',
		label: (
			<div className="react-select__group">
				<img src="/image/icon-group.svg" alt="Item 2" />
				<div className="react-select__info-box">
					<span className="react-select__name-group">ROBLOX</span>
					<span className="react-select__desc-group">34 Followers</span>
				</div>
			</div>
		),
	},
	{
		value: 'item2',
		label: (
			<div className="react-select__group">
				<img src="/image/icon-group.svg" alt="Item 2" />
				<div className="react-select__info-box">
					<span className="react-select__name-group">Animals</span>
					<span className="react-select__desc-group">3,534 Followers</span>
				</div>
			</div>
		),
	},
	{
		value: 'item2',
		label: (
			<div className="react-select__group">
				<img src="/image/icon-group.svg" alt="Item 2" />
				<div className="react-select__info-box">
					<span className="react-select__name-group">Stone</span>
					<span className="react-select__desc-group">
						111,123,534 Followers
					</span>
				</div>
			</div>
		),
	},
]

const DropDownList = () => {
	return (
		<Select
			name="group"
			options={options}
			unstyled
			isClearable
			noOptionsMessage={() => 'Group not found'}
			placeholder="Choose a group"
			className="react-select-container"
			classNamePrefix="react-select"
		/>
	)
}

export default DropDownList
