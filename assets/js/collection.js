var client = ShopifyBuy.buildClient({
    apiKey: "50d6e7ade3932c7c37b69c28c55f6815",
    domain: "martin-gatsby-shop-netlify-one.myshopify.com",
    appId: "6"
  });
  
  var ui = ShopifyBuy.UI.init(client);
  
  ui.createComponent("collection", {
    id: 262878494885,
    options: {
      product: {
        isButton: true,
        buttonDestination: "modal",
        contents: {
          button: false,
          options: false
        }
      }
    }
  });