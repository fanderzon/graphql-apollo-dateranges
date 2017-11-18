module.exports = `
type Query {
	posts(id: [ID!], author: [ID], title: [String], created: DateRange): [Post]
	authors(id: [ID!], name: [String], post: [ID]): [Author]
}
type Author {
	id: ID!
	name: String
	posts: [Post]
}
type Post {
	id: ID!
	title: String
	published: DateTime
	author: Author
}
scalar DateTime
input DateRange {
    from: DateTime
    to: DateTime
}
schema {
  query: Query
}
`;
