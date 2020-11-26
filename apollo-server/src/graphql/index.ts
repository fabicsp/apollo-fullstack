import * as glue from 'schemaglue';

export const { schema, resolver } = glue(__dirname, { mode: '**/*.?s', ignore: '**/*.spec.*' });