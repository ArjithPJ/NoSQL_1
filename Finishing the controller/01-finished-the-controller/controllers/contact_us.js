const contacts = [];

exports.getContact = (req, res, next) => {
  res.render('contactus', {
    pageTitle: 'Contact Us',
    path: '/contactus',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postContact = (req, res, next) => {
  contacts.push({ title: req.body.title });
  res.redirect('/success');
};

exports.success=(req,res,next)=>{
    res.render('success', {
        pageTitle: 'Success',
        path: '/sucess',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
};

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
};