const base = process.env.PROTOCOL+"://"+process.env.API_URL;

function send({ method, path, data, token }) {
	const fetch = process.browser ? window.fetch : require('node-fetch').default;

	const opts = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['Authorization'] = `Token ${token}`;
	}

	return fetch(`${base}/${path}`, opts)
		.then(r => r.text())
		.then(json => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

function get(path, token) {
	return send({ method: 'GET', path, token });
}

function del(path, token) {
	return send({ method: 'DELETE', path, token });
}

function post(path, data, token) {
	return send({ method: 'POST', path, data, token });
}

function put(path, data, token) {
	return send({ method: 'PUT', path, data, token });
}

export function getAllVisibleArticles() {
	return get(`articles?visible=1&_sort=created_at:DESC`);
}

export function getArticlesHomePage() {
	return get(`articles?visible=1&_sort=created_at:DESC&_limit=3`);
}

export function getArticleFromSlug(slug) {
	return get(`articles?slug=${slug}`);
}

export function getAllVisibleCategories() {
	return get(`categories?visible=1&_sort=created_at:DESC`);
}

export function getAllCategories() {
	return get(`categories?_sort=titre:ASC`);
}

export function getCategoryFromSlug(slug) {
	return get(`categories?slug=${slug}`);
}

export function getList(endpoint='articles',currentPage=1,page_size=10){
	return get(`${endpoint}?visible=1&_sort=created_at:DESC&_limit=${page_size}&_start=${currentPage * page_size}`);
}

export function getListCount(endpoint='articles',currentPage=1,page_size=10){
	return get(`${endpoint}/count?visible=1&_sort=created_at:DESC&_limit=${page_size}&_start=${currentPage * page_size}`);
}

export function getListArticlesFromCategory(slug_category,currentPage=1,page_size=10){
	return get(`articles?visible=1&categories.slug=${slug_category}&_sort=created_at:DESC&_limit=${page_size}&_start=${currentPage * page_size}`);
}

export function getListCountArticlesFromCategory(slug_category,currentPage=1,page_size=10){
	return get(`articles/count?visible=1&categories.slug=${slug_category}&_sort=created_at:DESC&_limit=${page_size}&_start=${currentPage * page_size}`);
}

export function getAllVisiblePages() {
	return get(`pages?visible=1&_sort=created_at:DESC`);
}

export function getPageFromSlug(slug) {
	return get(`pages?slug=${slug}`);
}
