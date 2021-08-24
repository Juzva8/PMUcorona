import React from 'react'
import './Services.css'
import candidate from '../../Assets/services-logo/candidate.png'
import gallery from '../../Assets/services-logo/gallery.png'
import postcare from '../../Assets/services-logo/postcare.png'
import pricing from '../../Assets/services-logo/pricing.png'
import candidate_text from '../../Assets/services-logo-text/candidate_text-copy.png'
import gallery_text from '../../Assets/services-logo-text/gallery_text-copy.png'
import postcare_text from '../../Assets/services-logo-text/post-care_text-copy.png'
import pricing_text from '../../Assets/services-logo-text/pricing_text-copy.png'

function Services() {
    return (
        <div className="services">
         <div className="services__content">
         <a href="/candidate" className="services__content__image" rel="candidate">
            <img src={candidate_text} alt="PMU Corona"/>
            <img src={candidate} alt="PMU Corona"/>
              
             </a>
             <a href="/gallery" className="services__content__image" rel="gallery">
             <img src={gallery_text} alt="gallery_text"/>
             <img src={gallery} alt="Microblading Corona"/>
                
             </a>
             <a href="/postcare" className="services__content__image" rel="postcare">
             <img src={postcare_text} alt="postcare_text"/>
             <img src={postcare} alt="Powder Brows Corona"/>
               
             </a>
             
             <a href="/pricing" className="services__content__image" rel="pricing">
             <img src={pricing_text} alt="Permanent Makeup and Microblading"/>
             <img src={pricing} alt="Permanent Makeup and Microblading"/>
             </a>

         </div>
        </div>
    )
}

export default Services
