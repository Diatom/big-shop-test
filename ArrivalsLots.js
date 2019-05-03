function ArrivalsLots() {
  var RequisiteA = ProductsArrivals.map(function (requis) {
    return React.createElement(Lot, { key: requis.id, product: requis });
  });
  return React.createElement(
    "div",
    { className: "array-lots" },
    RequisiteA
  );
}

function ShowcaseLots() {
  var RequisiteS = ProductsShowcase.map(function (requis) {
    return React.createElement(Lot, { key: requis.id, product: requis });
  });
  return React.createElement(
    "div",
    { className: "array-lots" },
    RequisiteS
  );
}

function Lot(props) {
  return React.createElement(
    "div",
    { className: "lot-card" },
    React.createElement("img", { className: "lot-pic", src: props.product.pic }),
    React.createElement(
      "p",
      null,
      props.product.description,
      React.createElement("br", null),
      React.createElement(
        "font",
        { className: "price" },
        props.product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })
      )
    ),
    React.createElement(
      "div",
      { className: "btn-arr" },
      React.createElement(
        "a",
        { href: "#" },
        "Add to Cart"
      )
    )
  );
}

var ProductsArrivals = [{
  id: "1",
  pic: "media/bugs-1.png",
  price: 23.2,
  description: "Black Genuine Leather Bags"
}, {
  id: "2",
  pic: "media/bugs-2.png",
  price: 20.16,
  description: "Fashion Red Leather Bags"
}, {
  id: "3",
  pic: "media/bugs-3.png",
  price: 30.14,
  description: "Fashion Genuine Leather Bags"
}, {
  id: "4",
  pic: "media/bugs-4.png",
  price: 15.2,
  description: "Simply Leather Bags"
}, {
  id: "5",
  pic: "media/bugs-5.png",
  price: 25.2,
  description: "New Fashion Leather Bags"
}, {
  id: "6",
  pic: "media/bugs-6.png",
  price: 17.6,
  description: "Single Hand Models Bags"
}];

var ProductsShowcase = [{
  id: "7",
  pic: "media/watch-1.png",
  price: 25.36,
  description: "Fashion Genuine Chain Watch"
}, {
  id: "8",
  pic: "media/watch-2.png",
  price: 35.24,
  description: "Fashion Silver Chain Watch"
}, {
  id: "9",
  pic: "media/watch-3.png",
  price: 23.12,
  description: "Fashion Chain Watch"
}, {
  id: "10",
  pic: "media/watch-4.png",
  price: 42.32,
  description: "Fashion Black Chain Watch"
}, {
  id: "11",
  pic: "media/watch-5.png",
  price: 15.2,
  description: "Fashion Lether  Watch"
}, {
  id: "12",
  pic: "media/watch-6.png",
  price: 36.12,
  description: "Fashion Forign Watch"
}];

ReactDOM.render(React.createElement(ArrivalsLots, null), document.getElementById("arrivals-lots"));
ReactDOM.render(React.createElement(ShowcaseLots, null), document.getElementById("watch-lots"));
ReactDOM.render(React.createElement(ArrivalsLots, null), document.getElementById("fashion-lots"));