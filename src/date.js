const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

module.exports = new GraphQLScalarType({
	name: 'Date',
	description: 'Custom Date Type',
	parseValue(value) {
		return new Date(value);
	},
	serialize(value) {
		return value.toISOString();
	},
	parseLiteral(ast) {
		if (ast.kind === Kind.STRING) {
			return new Date(ast.value);
		}
		return null;
	}
});
