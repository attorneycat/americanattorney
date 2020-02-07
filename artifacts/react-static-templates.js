

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/tobiasgu/dev/american_attorney/americanattorney/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/404.js'), universalOptions)
      t_0.template = '/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/404.js'
      
const t_1 = universal(import('/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/blog/components/PostSummary.js'), universalOptions)
      t_1.template = '/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/blog/components/PostSummary.js'
      
const t_2 = universal(import('/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/blog/index.js'), universalOptions)
      t_2.template = '/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/blog/index.js'
      
const t_3 = universal(import('/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/Contact.jsx'), universalOptions)
      t_3.template = '/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/Contact.jsx'
      
const t_4 = universal(import('/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/ContactForm.jsx'), universalOptions)
      t_4.template = '/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/ContactForm.jsx'
      
const t_5 = universal(import('/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/core/index.js'), universalOptions)
      t_5.template = '/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/core/index.js'
      
const t_6 = universal(import('/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/Hero.jsx'), universalOptions)
      t_6.template = '/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/Hero.jsx'
      
const t_7 = universal(import('/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/PictureTextBlock.jsx'), universalOptions)
      t_7.template = '/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/PictureTextBlock.jsx'
      
const t_8 = universal(import('/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/ServicesIOffer.jsx'), universalOptions)
      t_8.template = '/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/ServicesIOffer.jsx'
      
const t_9 = universal(import('/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/Testimonials.jsx'), universalOptions)
      t_9.template = '/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/Testimonials.jsx'
      
const t_10 = universal(import('/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/TextOverPictureBlock.jsx'), universalOptions)
      t_10.template = '/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/TextOverPictureBlock.jsx'
      
const t_11 = universal(import('/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/index.js'), universalOptions)
      t_11.template = '/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/index.js'
      
const t_12 = universal(import('/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/post/index.js'), universalOptions)
      t_12.template = '/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/post/index.js'
      

// Template Map
export default {
  '/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/404.js': t_0,
'/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/blog/components/PostSummary.js': t_1,
'/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/blog/index.js': t_2,
'/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/Contact.jsx': t_3,
'/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/ContactForm.jsx': t_4,
'/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/core/index.js': t_5,
'/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/Hero.jsx': t_6,
'/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/PictureTextBlock.jsx': t_7,
'/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/ServicesIOffer.jsx': t_8,
'/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/Testimonials.jsx': t_9,
'/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/components/TextOverPictureBlock.jsx': t_10,
'/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/index.js': t_11,
'/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/post/index.js': t_12
}
// Not Found Template
export const notFoundTemplate = "/Users/tobiasgu/dev/american_attorney/americanattorney/src/pages/404.js"

