import Api from '~/api';

// Plugin to make the api accessible globally
export default (_, inject) => {
    inject('api', Api);
}