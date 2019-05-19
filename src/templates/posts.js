import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image";

import Layout from "../components/layout";
 
const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}
 
const IndexPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  console.log(group);
 
  return (
    <Layout>
      <h4>{pageCount} Pages</h4>
 
      {group.map(({ node }) => (
        <div key={node.slug} className={"post"} style={{marginBottom: 50}}>
          {node.featured_media && node.featured_media.localFile.childImageSharp.resolutions && 
            <div>
              <Img resolutions={node.featured_media.localFile.childImageSharp.resolutions} />
            </div>
          }
          <Link to={`post/${node.slug}`}>
            <h3>{node.title}</h3>
          </Link>

          <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}}></div>

          <p>{node.date}</p>
        </div>
      ))}
      <div className="previousLink">
        <NavLink test={first} url={"/posts/" + previousUrl} text="Go to Previous Page" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={/posts/ + nextUrl} text="Go to Next Page" />
      </div>
    </Layout>
  )
}
export default IndexPage