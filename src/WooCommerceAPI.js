import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const WooCommerce = new WooCommerceRestApi({
    url: "https://teamwebdevelopers.com/bhargava/backend/",
    consumerKey: 'ck_0181870ebd755dd5a78b498d9c9bbf4c05548824',
    consumerSecret: 'cs_3f915e502466098d8f317c38bf944478bf025e21',
    version: "wc/v3",
});

export default WooCommerce;
