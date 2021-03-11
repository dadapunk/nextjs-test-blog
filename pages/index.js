import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';

import { getAllBlogs } from 'lib/api';

export default function Home({blogs}) {
  debugger
  return(
    <PageLayout>
    <AuthorIntro />
    <hr/>
    {/* {JSON.stringify(blogs)} */}
    <Row className="mb-5">
      {/* <Col md="10">
        <CardListItem />
      </Col> */}
      { blogs.map(blog =>
        <Col key={blog.slug} md="4">
          <CardItem 
            title={blog.title}
            subtitle={blog.subtitle}
          />
        </Col>
        )
      }

    </Row>
  </PageLayout>
    

  )
}

// this function is calles during the build (build time)
// Provides props to you page
// It will create static page
export async function getStaticProps() {
  console.log('Calling getStaticProps');
  const blogs = await getAllBlogs();
  return{
    props:{
      blogs
    }
  }
 

}