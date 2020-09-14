import Api from '~/api';

export default (_, inject) => {
    inject('api', Api);
}