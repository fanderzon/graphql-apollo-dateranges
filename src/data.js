const posts = [
	{ id: 1, authorId: 1, title: 'post 1', published: new Date('2017-11-01T12:00:00.000Z') },
	{ id: 2, authorId: 2, title: 'post 2', published: new Date('2017-10-01T12:00:00.000Z') },
	{ id: 3, authorId: 1, title: 'post 3', published: new Date('2017-11-01T16:00:00.000Z') },
	{ id: 4, authorId: 2, title: 'post 4', published: new Date('2017-11-11T12:00:00.000Z') },
	{ id: 5, authorId: 1, title: 'post 5', published: new Date('2017-11-11T12:00:00.000Z') },
];

const authors = [
	{ id: 1, name: 'Rick Sanchez' },
	{ id: 2, name: 'Morty Smith' }
];

module.exports = {
	posts,
	authors,
};
