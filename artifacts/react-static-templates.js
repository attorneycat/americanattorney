

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/cat/Documents/GitHub/americanattorney/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/Users/cat/Documents/GitHub/americanattorney/src/pages/404.js'), universalOptions)
      t_0.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/404.js'
      
const t_1 = universal(import('/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Contact.jsx'), universalOptions)
      t_1.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Contact.jsx'
      
const t_2 = universal(import('/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ContactForm.jsx'), universalOptions)
      t_2.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ContactForm.jsx'
      
const t_3 = universal(import('/Users/cat/Documents/GitHub/americanattorney/src/pages/components/core/index.js'), universalOptions)
      t_3.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/core/index.js'
      
const t_4 = universal(import('/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Hero.jsx'), universalOptions)
      t_4.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Hero.jsx'
      
const t_5 = universal(import('/Users/cat/Documents/GitHub/americanattorney/src/pages/components/PictureTextBlock.jsx'), universalOptions)
      t_5.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/PictureTextBlock.jsx'
      
const t_6 = universal(import('/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ServicesIOffer.jsx'), universalOptions)
      t_6.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ServicesIOffer.jsx'
      
const t_7 = universal(import('/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Testimonials.jsx'), universalOptions)
      t_7.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Testimonials.jsx'
      
const t_8 = universal(import('/Users/cat/Documents/GitHub/americanattorney/src/pages/components/TextOverPictureBlock.jsx'), universalOptions)
      t_8.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/components/TextOverPictureBlock.jsx'
      
const t_9 = universal(import('/Users/cat/Documents/GitHub/americanattorney/src/pages/index.js'), universalOptions)
      t_9.template = '/Users/cat/Documents/GitHub/americanattorney/src/pages/index.js'
      

// Template Map
export default {
  '/Users/cat/Documents/GitHub/americanattorney/src/pages/404.js': t_0,
'/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Contact.jsx': t_1,
'/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ContactForm.jsx': t_2,
'/Users/cat/Documents/GitHub/americanattorney/src/pages/components/core/index.js': t_3,
'/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Hero.jsx': t_4,
'/Users/cat/Documents/GitHub/americanattorney/src/pages/components/PictureTextBlock.jsx': t_5,
'/Users/cat/Documents/GitHub/americanattorney/src/pages/components/ServicesIOffer.jsx': t_6,
'/Users/cat/Documents/GitHub/americanattorney/src/pages/components/Testimonials.jsx': t_7,
'/Users/cat/Documents/GitHub/americanattorney/src/pages/components/TextOverPictureBlock.jsx': t_8,
'/Users/cat/Documents/GitHub/americanattorney/src/pages/index.js': t_9
}
// Not Found Template
export const notFoundTemplate = "/Users/cat/Documents/GitHub/americanattorney/src/pages/404.js"

