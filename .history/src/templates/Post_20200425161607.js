import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';


class PostTemplate extends React.Component {
	render() {

        const data = [... this.props.data.allRestApiApiPostGetAllAnonymous.edges]
        let posts = [...data[0].node.posts]
		const postContent = this.props.data.allRestApiApiPostGetAllAnonymous;
        // const { previous, next } = this.props.pageContext;
        
        console.log(postContent);
        console.log(posts);
        // console.log(`1 => ${postContent}`);

		return (
			<Layout>
				<SEO title={`postTitle`} description={`postAbstract`} />
					<p className="date"></p>
			</Layout>
		);
	}
}

export default PostTemplate;

export const pageQuery = graphql`
	query Posts {
		allRestApiApiPostGetAllAnonymous(filter: {posts: {elemMatch: {slug: {eq: "دانشمندان"}}}}) {
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