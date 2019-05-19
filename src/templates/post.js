import React, { Component } from "react"
import Img from "gatsby-image";

import Layout from "../components/layout";

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        const resolutions = post.featured_media.localFile.childImageSharp.resolutions

        console.log(resolutions);

        let facebook = '';
        let twitter = '';

        if(post.acf !== null) {
            if(post.acf.facebook !== '') {
                facebook = `<h3>Facebook</h3> ${post.acf.facebook}`
            }
            if(post.acf.twitter !== '') {
                twitter = `<h3>Twitter</h3> ${post.acf.twitter}`
            }
        }

        return (
            <Layout>
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

                {resolutions  &&
                    <div>
                        <Img resolutions={resolutions} />
                        <img src={resolutions.src} alt="Feature Image" />
                    </div>
                }

                <div dangerouslySetInnerHTML={{ __html: post.content }} />

                <div dangerouslySetInnerHTML={{ __html: facebook }} />
                <div dangerouslySetInnerHTML={{ __html: twitter }} />

                {/* {post.acf !== null &&
                    <div>
                        <h3>Facebook</h3>
                        {post.acf.facebook}
                        <h3>Twitter</h3>
                        {post.acf.twitter}
                    </div>
                } */}
            </Layout>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
            acf {
                facebook
                twitter
            }
            featured_media {
                localFile {
                    childImageSharp {
                        resolutions(width: 500, height: 200) {
                            src
                            width
                            height
                        }
                    }
                }
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`