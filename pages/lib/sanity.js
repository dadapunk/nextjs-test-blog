import sanityClient from '@sanity/client';

const option = {
    dataset: process.env.SANITY_DATASET_NAME,
    projecId: process.env.SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production'
    // useCdn === true, gives you fast response, it will get you
    //cached data
    // useCdn === false, gives you little bit slower response, but latest data
}

export default sanityClient(options);