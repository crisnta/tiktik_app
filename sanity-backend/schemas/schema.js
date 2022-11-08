import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import post from './post'
import user from './user'
import comment from './comment'
import postedBy from './postedBy'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
    /* Your types here! */
    post,
    user,
    comment,
    postedBy,
  ]),
})
