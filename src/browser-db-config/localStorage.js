function SAVE_LOCAL_DB_DATA(storageName, item) {
	const data = JSON.stringify(item);
	return localStorage.setItem(storageName, data);
}

function DELETE_LOCAL_DB_DATA(storageName) {
	localStorage.removeItem(storageName);
}

function GET_LOCAL_DB_DATA(storageName, deleteData = false) {
	const data = localStorage.getItem(storageName);
	if (deleteData) {
		DELETE_LOCAL_DB_DATA(storageName);
	}
	return JSON.parse(data);
}

function GET_USER_TOKEN() {
	let userData = GET_LOCAL_DB_DATA('shadow-book-user-data');
	return userData ? userData : null;
}

function GET_USER_DATA() {
	let userData = GET_LOCAL_DB_DATA('shadow-book-user-data');
	if (userData) {
		return userData ? userData.user : {};
	}
}


export {
	SAVE_LOCAL_DB_DATA,
	GET_LOCAL_DB_DATA,
	GET_USER_DATA,
	GET_USER_TOKEN,
	DELETE_LOCAL_DB_DATA,
};
