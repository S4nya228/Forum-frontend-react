import React, { useState, useEffect } from 'react'

import '../DropDownList/DropDownList.scss'
import axiosInstance from '../../../api/axiosInstance'

import Select from 'react-select'

const generateGroupOption = (group) => ({
	value: group.community_id,
	label: (
		<div className="react-select__group">
			<img src="/image/icon-group.svg" alt="Item 2" />
			<div className="react-select__info-box">
				<span className="react-select__name-group">{group.name}</span>
				<span className="react-select__desc-group">41,123,534 Followers</span>
			</div>
		</div>
	),
})

const DropDownList = () => {
	const [groupOptions, setGroupOptions] = useState([])

	useEffect(() => {
		const fetchGroups = async () => {
			try {
				const response = await axiosInstance.get('/client/community')
				const groupsFromServer = response.data.data

				if (Array.isArray(groupsFromServer)) {
					const options = groupsFromServer.map(generateGroupOption)
					setGroupOptions(options)
				} else {
					console.error('Data from server is not an array:', groupsFromServer)
				}
			} catch (error) {
				console.error('Error:', error)
			}
		}
		fetchGroups()
	}, [])

	return (
		<Select
			name="group"
			options={groupOptions}
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
