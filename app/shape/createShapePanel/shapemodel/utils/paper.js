import paperVendor from 'paper';

const canvas = document.createElement('canvas');
paperVendor && paperVendor.setup(canvas);

export const Paper = paperVendor;