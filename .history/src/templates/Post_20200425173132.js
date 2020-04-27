import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';


class PostTemplate extends React.Component {
	render() {

        const data = [... this.props.data.allRestApiApiPostGetAllAnonymous.edges]
        let posts = [...data[0].node.posts]
        let fPost = posts.filter(post => post.slug === slug)
        const {postTitle, postAbstract} = fPost[0]
        const { slug } = this.props.pageContext;

		return (
			<Layout singlePostHeader={true}>
                <div className="singlePostBanner"></div>
				<SEO title={postTitle} description={postAbstract} />
                <p className="date">{postTitle}</p>
                <p className="date">{postTitle}</p>
                <p className="date">{postTitle}</p>
                <p className="date">{postTitle}</p>
                <p className="date">{postTitle}</p>
                <p className="date">{postTitle}</p>
                <p className="date">{postTitle}</p>
                <p className="date">{postTitle}</p>
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