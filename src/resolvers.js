const data = require('./data');
const {
  GraphQLDateTime
} = require('graphql-iso-date');

const resolve = (tableName, where) => (root, args, context, field) => {
	if (where && where.key && where.foreignKey && root[where.foreignKey]) {
		return data[tableName].filter(item => item[where.key] === root[where.foreignKey]);
	}
	return data[tableName];
};
const resolveOne = (tableName, where) => (root, args, context, field) => {
	if (where && where.key && where.foreignKey && root[where.foreignKey]) {
		return data[tableName].find(item => item[where.key] === root[where.foreignKey]);
	}
	return null;
};

module.exports = {
	Query: {
		posts: resolve('posts'),
		authors: resolve('authors'),
	},
	Post: {
		author: resolveOne('authors', { key: 'id', 'foreignKey': 'authorId' }),
	},
	Author: {
		posts: resolve('posts', { key: 'authorId', foreignKey: 'id'}),
	},
	Date: GraphQLDateTime,
};
