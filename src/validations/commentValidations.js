export const validateComments = (comments) => {
	if (!comments) {
		return 'Please enter a comment.'
	}
	if (comments.length > 1000) {
		return 'Comment  must be less than 1000 characters.'
	}
}
