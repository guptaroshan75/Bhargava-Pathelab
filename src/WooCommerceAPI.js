import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const WooCommerce = new WooCommerceRestApi({
    url: `${process.env.REACT_APP_API_KEY}backend/`,
    consumerKey: process.env.REACT_APP_CONSUMER_KEY,
    consumerSecret: process.env.REACT_APP_CONSUMER_SECRET,
    version: "wc/v3",
});

export default WooCommerce;