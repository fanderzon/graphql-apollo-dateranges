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
	published: Date
	author: Author
}
scalar Date
input DateRange {
    from: Date
    to: Date
}
schema {
  query: Query
}
`;
