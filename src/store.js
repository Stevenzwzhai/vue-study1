const STORE_KEY = 'StoreList';
export default {
	store (items) {
		window.localStorage.setItem(STORE_KEY, JSON.stringify(items));
	},
	fetch () {
		return JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]');
	}
}