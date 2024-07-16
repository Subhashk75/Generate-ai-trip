import React from 'react';



import './BlogPage.css'
const BlogPage = () => {
  return (<>
  <div className='py-4'></div>
  <div className="blogBanner">
        <div className="headingBanner">
          <h1 >Shiksha Sambal Entrance Exam for Free Coaching at ALLEN Kota Concluded</h1>
          
        </div>
      </div>

    <main className="container my-5">
   
      
      <div className="row g-5">
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            From the InfiniteEduVerse
          </h3>

          <article className="blog-post">
            <h2 className="display-5 link-body-emphasis mb-1">Sample blog post</h2>
            <p className="blog-post-meta">July 20, 2024 by <a href="#">Ali Naushad</a></p>
            <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
            <hr  className='mb-4'/>
            <div className="blogImage">
              <img src="https://myexam.allen.in/wp-content/uploads/2024/07/B.Tech-Program-in-Hindi-at-IIT-Jodhpur-From-New-Academic-Session.jpg" alt="" />
            </div>
            <p><span style={{color:"red", fontWeight:"bold"}}>This is some additional paragraph placeholder </span>content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects <span style={{color:"red", fontWeight:"bold"}}>This is some additional paragraph placeholder </span> the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
            
            <p>This is an example blockquote in action:This is some additional paragraph placeholder content. <span style={{color:"red", fontWeight:"bold"}}>This is some additional paragraph placeholder </span>It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of textThis is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text..</p>
           
           
            <h3>Key Points</h3>
            <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>
            <ul>
              <li>First list item</li>
              <li>Second list item with a longer description</li>
              <li>Third list item to close it out</li>
              <li>First list item</li>
              <li>Second list item with a longer description</li>
              <li>Third list item to close it out</li>
            </ul>
           
              
            <h2>Inline HTML elements</h2>
            <p>This is an example blockquote in action:This is some additional paragraph placeholder content. <span style={{color:"red", fontWeight:"bold"}}>This is some additional paragraph placeholder </span>It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of textThis is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text..</p>
         
          </article>

         


    
        </div>

        <div className="col-md-4">
          <div className="position-sticky" style={{top: '2rem'}}>
            <div className="p-4 mb-3 bg-body-tertiary rounded">
              <h4 className="fst-italic">About</h4>
              <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Archives</h4>
              <ol className="list-unstyled mb-0">
                <li><a href="#">March 2021</a></li>
                <li><a href="#">February 2021</a></li>
                <li><a href="#">January 2021</a></li>
                <li><a href="#">December 2020</a></li>
                <li><a href="#">November 2020</a></li>
                <li><a href="#">October 2020</a></li>
                <li><a href="#">September 2020</a></li>
                <li><a href="#">August 2020</a></li>
                <li><a href="#">July 2020</a></li>
                <li><a href="#">June 2020</a></li>
                <li><a href="#">May 2020</a></li>
                <li><a href="#">April 2020</a></li>
              </ol>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Elsewhere</h4>
              <ol className="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
                <a href='https://google.com' target='main'>Google</a>
              </ol>
            </div>
          </div>
        </div>
      </div>


      <div className="row mb-2 my-5">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary-emphasis">World</strong>
              <h3 className="mb-0">Featured post</h3>
              <div className="mb-1 text-body-secondary">Nov 12</div>
              <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
            <img src="https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Round-4-Seat-Allotment-Released.jpg" alt="" style={{width:"300px",height:"250px"}}/>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
              <h3 className="mb-0">Post title</h3>
              <div className="mb-1 text-body-secondary">Nov 11</div>
              <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                Continue reading
                <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src="https://myexam.allen.in/wp-content/uploads/2024/07/JoSAA-Counselling-2024-Round-4-Seat-Allotment-Released.jpg" alt="" style={{width:"300px",height:"250px"}}/>
            </div>
          </div>
        </div>
      </div>

    </main>
</>
  );
}

export default BlogPage;
