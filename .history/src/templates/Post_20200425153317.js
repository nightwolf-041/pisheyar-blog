import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';


class PostTemplate extends React.Component {
	render() {
		const postContent = this.props.data.allRestApiApiPostGetAllAnonymous;
		const { postTitle, postAbstract, postDescription, postCreateDate, slug } = postContent;
        // const { previous, next } = this.props.pageContext;
        
        console.log(`1 => ${postContent}`);
        console.log(`1 => ${postTitle}`);
        // console.log(`1 => ${postContent}`);

		return (
			<Layout>
				<SEO title={postTitle} description={postAbstract} />
					<p className="date">{postCreateDate}</p>
					<p className="date">{postCreateDate}</p>
					<p className="date">{postCreateDate}</p>
					<p className="date">{postCreateDate}</p>
					<p className="date">{postCreateDate}</p>
					<p className="date">{postCreateDate}</p>
					<p className="date">{postCreateDate}</p>
					<p className="date">{postCreateDate}</p>
					<p className="date">{postCreateDate}</p>
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