export const validateGroupName = (groupName) => {
	if (!groupName) {
		return 'Please enter a name for your group.'
	}

	if (groupName.length > 30) {
		return 'Group name must be 30 characters or less.'
	}

	return null
}

export const validateGroupType = (groupType) => {
	if (!groupType) {
		return 'Please select a group type.'
	}

	return null
}
