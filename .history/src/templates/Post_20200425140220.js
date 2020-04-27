import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';


class PostTemplate extends React.Component {
	render() {
		const postContent = this.props.data.allRestApiApiPostGetAllAnonymous;
		const { postTitle, postAbstract, postDescription, postCreateDate, slug } = postContent;
		const { previous, next } = this.props.pageContext;

		return (
			<Layout>
				<SEO title={postTitle} description={postAbstract} slug={slug} />
				<section className="posts">
					<p className="date">{postCreateDate}</p>
					<ul>
						<li className="post-navigation">
							{previous && (
								<Link to={previous.slug} rel="prev">
									← {previous.postTitle}
								</Link>
							)}
						</li>
						<li className="post-navigation">
							{next && (
								<Link to={next.slug} rel="next">
									{next.postTitle} →
								</Link>
							)}
						</li>
					</ul>
				</section>
			</Layout>
		);
	}
}

export default PostTemplate;

export const pageQuery = graphql`
	query Posts($slug: String!) {
		allRestApiApiPostGetAllAnonymous(filter: {posts: {elemMatch: {slug: {eq: $slug}}}) {
			title
			subtitle
			description
			date
			slug
			content {
				json
			}
		}
	}
`;