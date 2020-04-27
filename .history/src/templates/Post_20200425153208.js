import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';


class PostTemplate extends React.Component {
	render() {
        const data = this.props.data.allRestApiApiPostGetAllAnonymous.edges;
        const post = data.node.posts
		const { postTitle, postAbstract, postDescription, postCreateDate, slug } = post;
		const { previous, next } = this.props.pageContext;

		return (
			<Layout>
				<SEO title={postTitle} description={postAbstract} />
					<p className="date">{postTitle}</p>
					<p className="date">{postTitle}</p>
					<p className="date">{postTitle}</p>
					<p className="date">{postTitle}</p>
					<p className="date">{postTitle}</p>
					<p className="date">{postTitle}</p>
					<p className="date">{postTitle}</p>
					<p className="date">{postTitle}</p>
					<p className="date">{postTitle}</p>
					<p className="date">{postCreateDate}</p>
					<p className="date">{postCreateDate}</p>
					<p className="date">{postCreateDate}</p>
					<p className="date">{postCreateDate}</p>
					<p className="date">{postCreateDate}</p>
					<p className="date">{postCreateDate}</p>
					<p className="date">{postCreateDate}</p>
			</Layout>
		);
	}
}

export default PostTemplate;

export const pageQuery = graphql`
	query Posts($slug: String!) {
		allRestApiApiPostGetAllAnonymous(filter: {posts: {elemMatch: {slug: {eq: $slug}}}}) {
            edges {
                node {
                  posts {
                    postTitle
                    postAbstract
                    postCreateDate
                    slug
                  }
                }
              }
		}
	}
`;